import React from "react";
import "./Button.css";

const Button = ({ link, text }) => {
  return (
    <a href={link} className="button-82-pushable" role="button">
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">{text}</span>
    </a>
  );
};

export default Button;
