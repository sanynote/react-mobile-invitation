import "./Invitation.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Invitation() {
  return (
    <div id="wrap">
      <div id="container">
        <div id="main">
          <div class="name">
            <p>이영훈</p>
            <p>이알냐</p>
            <p>김선지</p>
          </div>
          <p class="img">
            <img src="/img/main.webp" alt="메인이미지" />
          </p>
          <p class="desc">
            2022년 10월 22일 토요일 오후 1시 <br />
            마드로나 광화문로 오도라홀 2층
          </p>
        </div>

        <div id="letter">
          <p class="flower">
            <img src="/img/i0.png" alt="꽃 이미지" />
          </p>
          <p>
            서로의 이름을 부르는 것 만으로도 사랑의 깊이를 확인할 수 있는 두
            사람이 꽃과 나무처럼 걸어와서 서로의 모든것이 되기위해 오랜 기다림
            끝에 혼례식을 치르는 날<br />
            <br />
            세상은 더욱 아름다워라
          </p>
        </div>

        <div id="parent">
          <p class="img">
            <img src="/img/main.webp" alt="" />
          </p>
          <div id="nameBox">
            <div class="name">
              <p class="indi">
                김치범 , 서은주<span class="gray">의 딸</span>김선지
              </p>
              <p class="phone">
                <img src="" alt="" />
              </p>
            </div>
            <div class="name">
              <p class="indi">
                이훈아, 송혜경<span class="gray">의 아들</span>이호냐
              </p>
              <p class="phone">
                <img src="" alt="" />
              </p>
            </div>

            <p class="contact">
              <a href="#" title="부모님연락처">
                혼주에게 연락하기
              </a>
            </p>
          </div>
        </div>

        <div id="gallery">
          <h3>갤러리</h3>
          <ul>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
              </a>
            </li>
            <li>
              <a href="#" title="갤러리이미지0">
                <img src="/img/main.webp" alt="메인이미지" />
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
