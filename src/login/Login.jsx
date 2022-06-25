import * as React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const createUser = async () => {
    const response = await axios.post("http://localhost:8080/signup", {
      userName: phone,
      userPass: userPass,
    });
  };

  const [phone, setPhone] = React.useState("");
  const [userPass, setUserPass] = React.useState("");

  const test1 = (e) => {
    console.log("change:", e.target.value);
    setPhone(e.target.value);
  };

  const test2 = (e) => {
    console.log("event.target.value??:", e.target.value);
    setUserPass(e.target.value);
  };

  return (
    <>
      <div id="wrap">
        <div id="container">
          <h2> will you marry me?? </h2>
          <form id="login" action="#" method="post">
            <fieldset>
              <legend>Your detalis</legend>
              <ol>
                <li>
                  <label htmlFor="phone">전화번호: </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="010-123-4567"
                    pattern="\d{3}-\d{3,4}-\d{4}"
                    title=" '─' 을 넣고 입력"
                    onChange={test1}
                  />
                </li>
                <li>
                  <label htmlFor="userPass">비밀번호: </label>
                  <input
                    id="userPass"
                    type="text"
                    name="userPass"
                    required
                    onChange={test2}
                  />
                </li>
              </ol>
            </fieldset>

            <fieldset>
              <Link to={`/information?phone=${phone}&userPass=${userPass}`}>
                <button type="submit">제작하기</button>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
