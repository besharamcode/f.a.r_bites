import React from "react";
import logo from "../assets/Logo.svg";

const Hero = () => {
  return (
    <div id="home" className="h-[100vh] body-padding">
      <section className="flex justify-between items-center flex-col md:flex-row h-full">
        <div className="">
          <h1 className="text-6xl md:text-[5rem] font-bold text-prm font-[Outfit-Bold] w-full md:w-2/3">
            Indulge Your Cravings, Irresistible Brownies Await!
          </h1>
          <p>
            Get ready to satisfy your sweet tooth with brownies worth craving
          </p>
          <button>Order Now</button>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
