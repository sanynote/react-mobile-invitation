import "./Invitation.css";
import Map from "./Map";
import React, { useEffect, useState } from "react";

function Invitation() {
  return (
    <div id="wrap">
      <div id="container">
        <div id="main">
          <div className="name">
            <p name="manName">이훈영</p>
            <p name="date">10/22</p>
            <p name="womanName">유이아</p>
          </div>
          <p className="img">
            <img src="/img/main.webp" alt="메인이미지" />
          </p>
          <p className="desc">
            <span name="date">2022년 10월 22일 토요일</span>{" "}
            <span name="time">오후 1시</span>
            <br />
            <span name="add1">마드로나 광화문로 오도라홀 2층</span>
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
                <span name="womanFather">유규민</span> ,
                <span name="womanMother">이민정</span>
                <span className="gray">의 띨</span>
                <span name="womanName">유이아</span>
              </p>
              <p className="phone"></p>
            </div>
            <div className="name">
              <p className="indi">
                <span name="manFather">유규민</span> ,
                <span name="manMother">이민정</span>
                <span className="gray">의 아들</span>
                <span name="manName">이훈영</span>
              </p>
              <p className="phone"></p>
            </div>

            <p className="contact">
              <a href="#" title="부모님연락처">
                혼주 번호 : 010-123-4567
              </a>
            </p>
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
