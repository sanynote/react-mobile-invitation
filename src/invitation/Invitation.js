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

        <div id="gallery">
          <ul>
            <li>
              <img src="/img/main.webp" alt="메인이미지" />
            </li>
          </ul>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default Invitation;
