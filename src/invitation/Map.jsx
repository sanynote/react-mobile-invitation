/* global kakao */
import React, { useEffect, useState } from "react";
// import "../styles/Map.scss";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3,
    };
    //지도생성
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(
      "서울 관악구 신림로 59길",
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          // var infowindow = new kakao.maps.InfoWindow({
          //   content:
          //     '<div style="width:150px;color:red;text-align:center;padding:6px 0;">웨딩홀</div>',
          // });
          // infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      }
    );
  }, []);

  useEffect(() => {
    console.log("c");
  }, []);

  const [sunny, setSunny] = useState();
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
      <div
        id="myMap"
        style={{ width: "350px", height: "400px", margin: "0 auto" }}
      ></div>
    </div>
  );
};

export default Map;
