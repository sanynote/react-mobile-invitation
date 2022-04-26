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
            <img src="" alt="" />
          </p>
          <div class="nameArea">
            <div></div>
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
