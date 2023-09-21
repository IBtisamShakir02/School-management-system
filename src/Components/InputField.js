import React from "react";
import "./InputField.css";
const InputField = (props) => {
  return (
    <>
      <div className="inputBox">
        <span>{props.lable}</span>
        <input
          autoComplete="off"
          onChange={props.ch}
          id={props.Id}
          value={props.vl}
          type={props.type}
          required="required"
        />
      </div>
    </>
  );
};

export default InputField;
