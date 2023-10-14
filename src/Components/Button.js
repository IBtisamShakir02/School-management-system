import React from "react";
import "../Components/Button.css";

const Button = (props) => {
  const { py, px } = props;
  return (
    <>
      <button
        onClick={props.go}
        style={{
          background: props.color,
        }}
        className={`btn ${py} ${px} hover:text-slate-100`}
      >
        {props.title}
      </button>
    </>
  );
};

export default Button;
