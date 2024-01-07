/* eslint-disable */
// @ts-ignore
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";

// FIXME: Criar arquivo no .gitignore para não mostrar a env
mapboxgl.accessToken =
  "";

export default function Places() {
  // FIXME: Colocar os lugares que estive
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.032, 38.913],
        },
        properties: {
          title: "Mapbox",
          description: "Washington, D.C.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-122.414, 37.776],
        },
        properties: {
          title: "Mapbox",
          description: "San Francisco, California",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-22.44, -37.776],
        },
        properties: {
          title: "Mapbox",
          description: "San Francisco, California",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-28.44, -46.776],
        },
        properties: {
          title: "Mapbox",
          description: "San Francisco, California",
        },
      },
    ],
  };

  const bgMarkerList = [
    "bg-purple-800",
    "bg-pink-800",
    "bg-red-800",
    "bg-green-600",
    "bg-blue-600",
  ];

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ivanmedeiros/clr2ygbsu00vh01p5gftw3j4j",
      center: [-56.9, -13.35],
      zoom: 1,
    });

    geojson.features.map((value, index) => {
      const el = document.createElement("div");

      const color = bgMarkerList[index % bgMarkerList.length];

      el.className = `w-2 h-2 rounded-full ${color} opacity-30`;
      new mapboxgl.Marker(el)
        .setLngLat(value.geometry.coordinates)
        .addTo(map.current);
    });
  });

  return (
    <main className="bg-he-background h-screen">
      <Header type={PageType.HE} />
      <div>
        <div className="top-0 left-0 z-10 absolute pt-20 text-white w-full text-center flex justify-center flex-col bg-transparent backdrop-blur-sm">
          <p className="text-lg md:text-2xl font-semibold font-inter">World</p>
          <p className="text-sm md:text-base text-low-text-black ">
            The places i've been - I will travel the world thats my dream
          </p>
        </div>
        <div ref={mapContainer} className="w-screen h-screen" />
      </div>
    </main>
  );
}
/* eslint-enable */
