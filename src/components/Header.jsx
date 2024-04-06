import React from "react";
import logo from "../assets/Logo-100.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="fixed top-0 flex w-full justify-between items-center body-padding py-4">
      <div className="logo">
        <img className="sm:h-16 h-14" src={logo} alt="FAR Bites" />
      </div>
      <nav
        id="navbar"
        className="absolute transition-all -top-[50rem] md:top-[unset] md:static bg-bg md:bg-transparent w-[98%] rounded-md left-1/2 md:translate-x-0 -translate-x-1/2 md:w-fit shadow-md md:shadow-none "
      >
        <div className="relative">
          <ul className="md:flex md:items-center md:justify-evenly md:gap-6 font-[Outfit-Medium] font-md text-md text-prm">
            {["Home", "Menu", "Ratings", "About Us", "Contact Us"].map(
              (item) => {
                return (
                  <li key={item} className="text-center md:text-start">
                    <a
                      href={`#${item}`}
                      className="p-1  nav-anim relative block mt-4"
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
          <button
            className="md:hidden"
            onClick={() => {
              const nav = document.getElementById("navbar");
              nav.classList.add("-top-[50rem]");
              nav.classList.remove("top-[0%]");
            }}
          >
            <FontAwesomeIcon
              className="text-prm font-light text-2xl absolute top-[0.4rem] right-[1rem]"
              icon={faXmark}
            />
          </button>
        </div>
      </nav>
      <button
        className="md:hidden"
        onClick={() => {
          const nav = document.getElementById("navbar");
          nav.classList.remove("-top-[50rem]");
          nav.classList.add("top-[0%]");
        }}
      >
        <FontAwesomeIcon className="text-prm text-2xl" icon={faBars} />
      </button>
    </div>
  );
};

export default Header;
