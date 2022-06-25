import * as React from "react";
import "./Information.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Information() {
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

  const sun = (e) => {
    setInformation({
      ...information,
      [e.target.name]: e.target.value,
    });
  };

  const create = async () => {
    console.log("information:", information);
    const response = await axios.post("http://15.165.203.57:8080/save-info", {
      information,
    });

    console.log("res:", response);
    return false;
  };

  return (
    <>
      <div id="wrap">
        <h3>고객정보 입력</h3>
        {/* <form id="info" action="#none" method="get"> */}
        <ul id="info">
          <li>
            <label for="mn">신랑이름: </label>
            <input id="mn" type="text" name="manName" onChange={sun} />
          </li>
          <li>
            <label for="wn">신부이름: </label>
            <input id="wn" type="text" name="womanName" onChange={sun} />
          </li>
          <li>
            <label for="date">결혼식 날짜: </label>
            <input id="date" type="text" name="date" onChange={sun} />
          </li>
          <li>
            <label for="time">결혼식 시간: </label>
            <input id="time" type="text" name="time" onChange={sun} />
          </li>
          <li>
            <label for="text">결혼식 글귀: </label>
            <input id="text" type="text" name="text" onChange={sun} />
          </li>
          <li>
            <label for="mfn">신랑아버지성함: </label>
            <input id="mfn" type="text" name="manFather" onChange={sun} />
          </li>
          <li>
            <label for="mmn">신랑어머니성함 </label>
            <input id="mmn" type="text" name="manMother" onChange={sun} />
          </li>
          <li>
            <label for="wfn">신부아버지성함: </label>
            <input id="wfn" type="text" name="womanFather" onChange={sun} />
          </li>
          <li>
            <label for="wmn">신부어머니성함: </label>
            <input id="wmn" type="text" name="womanMother" onChange={sun} />
          </li>
          <li>
            <label for="place">예식장 주소: </label>
            <input id="place" type="text" name="add1" onChange={sun} />
          </li>
          <li>
            <label for="detail">예식장 상세주소: </label>
            <input id="detail" type="text" name="add2" onChange={sun} />
          </li>
          {/* <li>
              <label for="phone">혼주번호: </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="010-1234-5678"
              />
            </li> */}
        </ul>
        {/* </form> */}
        <Link to={`/invitation?information=${information}`}>
          <button onClick={create}>제작하기</button>
        </Link>
      </div>
    </>
  );
}

export default Information;
