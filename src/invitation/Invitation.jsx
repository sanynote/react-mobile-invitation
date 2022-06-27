import "./Invitation.css";
import Map from "./Map";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Invitation() {
  const url = new URL(window.location.href);

  let query = window.location.search;
  let param = new URLSearchParams(query);

  let phone = param.get("phone");
  let userPass = param.get("userPass");

  const [information, setInformation] = React.useState({
    phone: phone,
    password: userPass,
    manName: "",
    womanName: "",
    manFather: "",
    manMother: "",
    womanFather: "",
    womanMother: "",
    date: "",
    time: "",
    add1: "",
    add2: "",
    text: "",
  });

  useEffect(async () => {
    const info = await axios.get(`server/${phone}/${userPass}`);

    console.log("hello3", info.data);
    setInformation(info.data);
  }, []);

  return (
    <div id="wrap">
      <div id="container">
        <div id="main">
          <div className="name">
            <p name="manName">{information.manName}</p>
            <p name="date">{information.date}</p>
            <p name="womanName">{information.womanName}</p>
          </div>
          <p className="img">
            <img src="/img/main.webp" alt="메인이미지" />
          </p>
          <p className="desc">
            <span name="date">{information.date}</span>{" "}
            <span name="time">{information.time}</span>
            <br />
            <span name="add1">{information.add1}</span>
          </p>
        </div>

        {/* <div id="map"></div> */}
        <Map></Map>
        <div id="letter">
          <p className="flower"></p>
          <p className="text" name="text">
            서로의 이름을 <br />
            부르는 것 만으로도
            <br /> 사랑의 깊이를 확인할 수 있는
            <br /> 두 사람이
            <br /> 꽃과 나무처럼 걸어와서
            <br /> 서로의 모든것이 되기위해
            <br /> 오랜 기다림 끝에
            <br /> 혼례식을 치르는 날<br />
            <br />
            <br />
            세상은 더욱 아름다워라
          </p>
        </div>

        <div id="parent">
          <p className="img">
            <img src="/img/wedding.jpeg" alt="메인이미지" />
          </p>
          <div id="nameBox">
            <div className="name">
              <p className="indi">
                <span name="womanFather">{information.womanFather}</span> ,
                <span name="womanMother">{information.womanMother}</span>
                <span className="gray">{information.gray}</span>
                <span name="womanName">{information.womanName}</span>
              </p>
              <p className="phone"></p>
            </div>
            <div className="name">
              <p className="indi">
                <span name="manFather">{information.manFather}</span> ,
                <span name="manMother">{information.manMother}</span>
                <span className="gray">{information.gray}</span>
                <span name="manName">{information.manName}</span>
              </p>
              <p className="phone"></p>
            </div>

            <p className="contact">{phone}</p>
          </div>
        </div>

        <div id="gallery">
          <h3>갤러리</h3>
          <ul>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding0.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding1.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding2.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding3.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding4.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding5.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding6.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding7.jpeg" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="img/wedding8.jpeg" alt="메인이미지" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default Invitation;
