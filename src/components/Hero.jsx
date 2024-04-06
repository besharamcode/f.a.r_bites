import React from "react";
import logo from "../assets/Logo.svg";

const Hero = () => {
  return (
    <div id="home" className="h-[100vh] body-padding pt-1">
      <section className="flex justify-between flex-col-reverse md:flex-row h-full md:mt-44 mt-40">
        <div className="w-full md:w-2/3">
          <h1 className="text-6xl md:text-[6vw] font-bold text-prm font-[Outfit-Bold] ">
            Indulge Your Cravings, Irresistible Brownies Await!
          </h1>
          <p className="w-3/4 text-prm-muted mt-2">
            Enter a realm of temptation with our irresistible brownies. Satisfy
            your cravings with each decadent bite. Indulge now and experience
            pure delight!
          </p>
          <button className="font-medium bg-prm px-6 py-3 rounded-full text-white mt-6 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-prm">
            Order Now
          </button>
        </div>
        <div>
          <img className="opacity-0" src={logo} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
