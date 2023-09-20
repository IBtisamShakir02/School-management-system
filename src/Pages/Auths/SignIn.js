import React from "react";
import "../Auths/SignIn.css";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const navigate = useNavigate();
  const handleNavigationSignUp = () => {
    navigate("/SignUp");
  };
  const handleNavigationSignIn = () => {
    navigate("/Home");
  };
  return (
    <>
      <div className="backgroundSI">
        <div className="innerDivSI">
          <div className="outerBoxSI">
            <h2 className="txtSI">{props.lable}</h2>
            <div className="DivSI">
              <InputField lable="E-Mail:" type="email" />
              <MdEmail className="icon" color="white" size={18} />
            </div>
            <div className="DivSI">
              <InputField lable="Password:" type="password" />
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
          <div className="Logo"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
