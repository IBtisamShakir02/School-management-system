import React from "react";
import "../Auths/SignUp.css";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/");
  };
  return (
    <>
      <div className="background">
        <div className="innerDiv">
          <div className="outerBox">
            <h2 className="txt">{props.lable}</h2>
            <div className="Div">
              <InputField lable="Full-Name:" type="text" />
              <MdDriveFileRenameOutline
                className="icon"
                color="white"
                size={20}
              />
            </div>
            <div className="Div">
              <InputField lable="E-Mail:" type="email" />
              <MdEmail className="icon" color="white" size={18} />
            </div>
            <div className="Div">
              <InputField lable="Phone:" type="tel" />
              <MdPhone className="icon" color="white" size={18} />
            </div>
            <div className="Div">
              <InputField lable="Password:" type="password" />
              <MdLock className="icon" color="white" size={18} />
            </div>
            <br />
            <Button
              go={() => goToSignIn()}
              color="rgb(62, 96, 207)"
              title="Sign-Up"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
