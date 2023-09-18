import React from "react";
import "./ModalSignIn.css";
import Modals from "react-modal";
import InputField from "./InputField";
import Button from "./Button";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
const ModalSignIn = (props) => {

  return (
    <>
      <Modals
        isOpen={props.isOpen}
        overlayClassName="Overlay"
        className="Modal"
      >
        <h2 className="txt">{props.lable}</h2>
        <div className="Div">
          <InputField lable="E-Mail:" type="email" />
          <MdEmail className="icon" color="white" size={18} />
        </div>
        <div className="Div">
          <InputField lable="Password:" type="password" />
          <MdLock className="icon" color="white" size={18} />
          <br></br>
        </div>
        <br />
        <Button title="SignIn" />
        <Button title="SignUp" />
      </Modals>
    </>
  );
};

export default ModalSignIn;
