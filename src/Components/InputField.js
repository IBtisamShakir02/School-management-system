import React from "react";
import "./InputField.css";
const InputField = (props) => {
  return (
    <>
      <div className="inputBox">
        <span className="font-popins" >{props.lable}</span>
        <input className="font-popins"
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
