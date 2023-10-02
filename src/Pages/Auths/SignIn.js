// <=========IMPORTS========>
import React, { useState } from "react";
import "../Auths/SignIn.css";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import img from "./SC-Logo.png";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  // <=======DECLEARATIONS======>
  const navigate = useNavigate();
  const urlsignin = "http://localhost:4000/api/login";
  // <========STATES=============>
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  // <=======FUNCTIONS=========>
  const handleNavigationSignUp = () => {
    navigate("/SignUp");
  };
  const handleNavigationSignIn = () => {
    const data = {
      email: signInData.email,
      password: signInData.password,
    };
    if (data.email !== "" && data.password !== "") {
      fetch(urlsignin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Login failed");
          }
        })
        .then((userData) => {
          if (userData && userData.token) {
            navigate("/Home");
          } else {
            throw new Error("Invalid response data");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Login failed. Please try again.");
        });
    } else {
      alert("Please Enter Data");
    }
  };
  const handleChangeSignIn = (e) => {
    const NData = { ...signInData };
    NData[e.target.id] = e.target.value;
    setSignInData(NData);
  };
  // <========ELEMENTS========>
  return (
    <>
      <div className="backgroundSI">
        <div className="innerDivSI">
          <div className="outerBoxSI">
            <h2 className="txtSI font-popins">{props.lable}</h2>
            <div className="DivSI">
              <InputField
                ch={(e) => handleChangeSignIn(e)}
                Id="email"
                vl={signInData.email}
                lable="E-Mail:"
                type="email"
              />
              <MdEmail className="icon" color="white" size={18} />
            </div>
            <div className="DivSI">
              <InputField
                ch={(e) => handleChangeSignIn(e)}
                Id="password"
                vl={signInData.password}
                lable="Password:"
                type="password"
              />
              <MdLock className="iconSI" color="white" size={18} />
            </div>
            <br />
            <div className="btn1">
              <Button
                color="rgb(39, 165, 88)"
                title="Sign-In"
                go={() => handleNavigationSignIn()}
              />
              <Button
                color="rgb(62, 96, 207)"
                title="Sign-Up"
                go={() => handleNavigationSignUp()}
              />
            </div>
          </div>
          <div className="Logo">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
