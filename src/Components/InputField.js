import React from "react";
import "./InputField.css";
const InputField = (props) => {
  return (
    <>
      <div className="inputBox">
        <span>{props.lable}</span>
        <input type={props.type} required="required"  /> 
      </div>
    </>
  );
};

export default InputField;
