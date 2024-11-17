import React from "react";
import { Sparkles } from "../../../components/sparkles";
import Logo from "../../../assets/images/logo.jpg";
import Button from "../../../components/Button/Button";
import "./Hero.css";
function Index() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#1A1831]">
      <div className="relative h-80 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
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

      <article className="hero-box pt-2 w-[70%] mx-auto text-[#FAF3DD]  z-10 relative">
        <h1 className=" hero-title  text-center text-5xl  font-medium py-3">
          Orzular quruq va’dalar ustiga qurilmaydi
        </h1>
        <p className="hero-text">
          Innovatsion yechimlar, oliy darajadagi mahorat va ishonchga tayanib,
          g‘oyalarni ramziy inshootlarga aylantiramiz. Keling, siz faxrlanadigan
          kelajakni birgalikda bunyod etaylik.
        </p>
      </article>
      <div className="hero-center">
        <Button link={"#contact"} text={"Bepul maslahat olish"} />
      </div>
    </section>
  );
}

export default Index;
