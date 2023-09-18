import React from "react";
import "./Modal.css";
import Modals from "react-modal";
import InputField from "./InputField";
import Button from "./Button";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
const Modal = (props) => {
  return (
    <>
      <Modals
        isOpen={props.isOpen}
        overlayClassName="Overlay"
        className="Modal"
      >
        <h2 className="txt">{props.lable}</h2>
        <div className="Div">
          <InputField lable="Full-Name:" type="text" />
          <MdDriveFileRenameOutline className="icon" color="white" size={20} />
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
        <Button title="SignUp" />
      </Modals>
    </>
  );
};

export default Modal;
