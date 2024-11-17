import React from "react";
import "./Button.css";

const Button = ({ link, text }) => {
  return (
    <a className="pushable" href={link}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front"> {text} </span>
    </a>
  );
};

export default Button;
