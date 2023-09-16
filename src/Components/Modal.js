import React from "react";
import "./Modal.css";
import Modals from "react-modal";
import InputField from "./InputField";
import Button from "./Button";
const Modal = (props) => {
  return (
    <>
      <Modals
        isOpen={props.isOpen}
        overlayClassName="Overlay"
        className="Modal"
      >
        <h2 className="txt">{props.lable}</h2>
        <InputField lable="Full-Name:" type="text" />
        <InputField lable="E-Mail:" type="email" />
        <InputField lable="Phone:" type="tel" />
        <InputField lable="Password:" type="password" />
        <br/>
        <Button title="SignUp" />
      </Modals>
    </>
  );
};

export default Modal;
