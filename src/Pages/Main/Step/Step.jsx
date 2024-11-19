import React from "react";
import Title from "../../../assets/images/title.png";
import "./Step.css";
const Step = () => {
  return (
    <section className="step">
      <div className="container">
        <h2 className="step-title">Eng Qulay — Bizdan!</h2>
        <img className="step-title-img" src={Title} alt="title" />
      </div>
    </section>
  );
};

export default Step;
