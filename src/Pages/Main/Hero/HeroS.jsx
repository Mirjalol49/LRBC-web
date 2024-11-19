import React from "react";
import { Sparkles } from "../../../components/sparkles";
import Logo from "../../../assets/images/logo.jpg";
import Button from "../../../components/Button/Button";

import "./Hero.css";
function Hero() {
  return (
    <section className="hero-section">
      <div className="relative h-80 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7d79c166] after:bg-[#12123C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]" />

        <Sparkles
          density={400}
          size={1.4}
          direction="top"
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>

      <div className="mx-auto -mt-52 max-w-2xl relative z-10">
        <div className="bg-white backdrop-blur-lg border border-gray-800 p-4 w-28 h-28 mx-auto grid place-content-center rounded-full">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      <article className="hero-box container">
        <h1 className="hero-title">Orzular quruq va’dalar ustiga qurilmaydi</h1>
        <p className="hero-text">
          Innovatsion yechimlar, oliy darajadagi mahorat va ishonchga tayanib,
          g‘oyalarni ramziy inshootlarga aylantiramiz.
        </p>
        <Button link={"#contact"} text={"Bepul maslahat olish"} />
      </article>
    </section>
  );
}

export default Hero;
