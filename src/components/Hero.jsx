import React from "react";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <div id="home" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
      <section className="flex justify-between flex-col-reverse md:flex-row h-full md:mt-44 mt-40">
        <div className="w-full md:w-2/3">
          <h1 className="text-[8vw] leading-[9vw] md:text-[6vw] md:leading-[6.5vw] font-bold font-[Outfit-Bold]">
            Indulge Your Cravings, Irresistible Brownies Await!
          </h1>
          <p className="sm:w-3/4 w-full mt-2">
            Enter a realm of temptation with our irresistible brownies. Satisfy
            your cravings with each decadent bite. Indulge now and experience
            pure delight!
          </p>
          <a href="#menu">
            <button className="font-medium bg-prm px-5 py-2 rounded-full text-white mt-6 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-prm">
              Menu
            </button>
          </a>
        </div>
        <div>
          <img
            className="md:w-[25rem] w-[75%] mx-auto md:mx-[unset] mb-12 opacity-50 rotate-12 hover:rotate-0 hover:opacity-100 transition-all rounded-md"
            src={heroImg}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
