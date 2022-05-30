import * as React from "react";
import "./Information.css";

function Information() {
  const [age, setAge] = React.useState("11");

  const [information, setInformation] = React.useState({
    phone: "",
    password: "",
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
      manName: e.target.value,
    });
    console.log(e.target.value);
    console.log(information);
  };

  return (
    <>
      <div id="wrap">
        <h3>고객정보 입력</h3>
        <form id="info" action="#none" method="get">
          <ul>
            <li>
              <label for="mn">신랑이름: </label>
              <input id="mn" type="text" name="mn" onChange={sun} />
            </li>
            <li>
              <label for="wn">신부이름: </label>
              <input id="wn" type="text" name="wn" />
            </li>
            <li>
              <label for="date">결혼식 날짜: </label>
              <input id="date" type="text" name="date" />
            </li>
            <li>
              <label for="mfn">신랑아버지성함: </label>
              <input id="mfn" type="text" name="mfn" />
            </li>
            <li>
              <label for="mmn">신랑어머니성함 </label>
              <input id="mmn" type="text" name="mmn" />
            </li>
            <li>
              <label for="wfn">신부아버지성함: </label>
              <input id="wfn" type="text" name="wfn" />
            </li>
            <li>
              <label for="wmn">신부어머니성함: </label>
              <input id="wmn" type="text" name="wmn" />
            </li>
            <li>
              <label for="place">예식장 주소: </label>
              <input id="place" type="text" name="place" />
            </li>
            <li>
              <label for="detail">예식장 상세주소: </label>
              <input id="detail" type="text" name="detail" />
            </li>
            <li>
              <label for="phone">혼주번호: </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="010-1234-5678"
              />
            </li>
          </ul>
          <p class="btn">
            <input type="submit" value="제작하기" title="제작하기" />
          </p>
        </form>
      </div>
    </>
  );
}

export default Information;
