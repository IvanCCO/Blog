/* eslint-disable */
// @ts-ignore
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import PLACES from "../../assets/JSON/places.json";
import { Header } from "../../components/Header";

// FIXME: Criar arquivo no .gitignore para não mostrar a env
mapboxgl.accessToken =
  "pk.eyJ1IjoiaXZhbm1lZGVpcm9zIiwiYSI6ImNscjJzb2JsYTE1NXYyanBhbDJuODVnbGIifQ.BFnN9Vcd0ZzWpi3dAUKdMA";

export default function Places() {
  // FIXME: Colocar os lugares que estive
  const geojson = PLACES;

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

      el.className = `marker`;
      el.id = idStyle[index % idStyle.length];

      new mapboxgl.Marker(el)
        .setLngLat(value.geometry.coordinates)

        .addTo(map.current);
    });
  });

  return (
    <main className="bg-he-background h-screen">
      <Header />
      <div>
        <div className="top-0 left-0 z-10 absolute pt-20 text-white w-full text-center flex justify-center flex-col bg-transparent backdrop-blur-sm space-y-3">
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
