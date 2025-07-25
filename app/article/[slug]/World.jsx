"use client";
/* eslint-disable */
// @ts-ignore
import mapboxgl from "mapbox-gl";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import Head from "next/head";
import MarkerModal from "../../../components/MarkerModal";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;

export default function World({ locations }) {
  const idStyle = [
    "marker-orange",
    "marker-blue",
    "marker-green",
    "marker-purple",
    "marker-red",
    "marker-white",
    "marker-yellow",
  ];

  const mapContainer = useRef(null);
  const map = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState({
    url: null,
    place: null,
    history: null,
  });

  useEffect(() => {
    const initializeMap = async () => {
      if (map.current) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/ivanmedeiros/clr2ygbsu00vh01p5gftw3j4j",
        center: [-56.9, -13.35],
        zoom: 1,
      });

      locations.forEach((value, index) => {
        const el = document.createElement("div");
        el.className = `marker`;
        el.id = idStyle[index % idStyle.length];

        el.onclick = () => {
          console.log("Marker clicked:", value);

          if (value?.properties) {
            setSelectedPost({
              url: value.properties.url || null,
              place: value.properties.title || null,
              history: value.properties.description || null,
            });
          }
          onOpen();
        };

        new mapboxgl.Marker(el)
          .setLngLat(value.geometry.coordinates)
          .addTo(map.current);
      });
    };
    initializeMap();
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-he-background h-screen">
        <div>
          <div className="top-0 left-0 z-10 absolute pt-20 text-white w-full text-center flex justify-center flex-col bg-transparent backdrop-blur-sm space-y-3">
            <p className="text-lg md:text-2xl font-semibold font-inter">
              Globo
            </p>
            <p className="text-sm md:text-base text-low-text-black ">
              Lugares que já estive, eu vou conhecer o mundo, esse é meu sonho
            </p>
          </div>
          <div ref={mapContainer} className="w-screen h-screen" />
        </div>
        {selectedPost && (
          <MarkerModal post={selectedPost} isOpen={isOpen} onClose={onClose} />
        )}
      </main>
    </>
  );
}
/* eslint-enable */
