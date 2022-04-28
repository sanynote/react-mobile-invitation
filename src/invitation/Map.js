/* global kakao */
import React, { useEffect, useState } from "react";
// import "../styles/Map.scss";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    console.log("a");
  });

  useEffect(() => {
    console.log("c");
  }, []);

  const [sunny, setSunny] = useState(0);
  useEffect(() => {
    console.log("sunny");
  }, [sunny]);

  console.log("b");

  //   useEffect(() => {
  //     let container = document.getElementById("map");

  //     let options = {
  //       center: new window.kakao.maps.LatLng(35.85133, 127.734086),
  //       level: 13,
  //     };

  //     let map = new window.kakao.maps.Map(container, options);

  //     console.log("loading kakaomap");
  //   }, []);

  return (
    <div>
      <div>{sunny}</div>
      <button
        onClick={() => {
          setSunny(sunny + 1);
        }}
      >
        click!
      </button>
      <div id="map" style={{ width: "300px", height: "400px" }}></div>
    </div>
  );
};

export default Map;
