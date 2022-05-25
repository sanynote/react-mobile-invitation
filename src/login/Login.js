import * as React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import LocalPhone from "@mui/icons-material/LocalPhone";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import "./Login.css";

function Login() {
  const createUser = async () => {
    // const userId = document.getElementById("userId").value;
    // const userPass = document.getElementById("userPass").value;
    console.log("userId!!", userId);
    console.log("userPass!!", userPass);

    const response = await axios.post("http://localhost:8080/signup", {
      userName: userId,
      userPass: userPass,
    });

    console.log("response??", response);
  };

  const [userId, setUserId] = React.useState("");
  const [userPass, setUserPass] = React.useState("");

  const halo = async () => {
    console.log(userId);
    console.log(userPass);
    // document.write(userId);
    // document.write(userPass);
  };

  const userIdChange = (e) => {
    setUserId(e.target.value);
  };

  const userPassChange = (e) => {
    setUserPass(e.target.value);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    // 1. values setting
    setValues({ ...values, [prop]: event.target.value });

    // 2. userPass setting
    setUserPass(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div id="wrap">
        <div id="container">
          <h2> will you marry me? </h2>
          <form id="login" action="#" method="post">
            <fieldset>
              <legend>Your detalis</legend>
              <ol>
                <li>
                  <label for="phone">전화번호: </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="010-123-4567"
                    pattern="\d{3}-\d{3,4}-\d{4}"
                    title=" '─' 을 넣고 입력"
                  />
                </li>
                <li>
                  <label for="userpw">비밀번호: </label>
                  <input id="userpw" type="text" name="userpw" required />
                </li>
              </ol>
            </fieldset>

            <fieldset>
              <button type="submit">제작하기</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
