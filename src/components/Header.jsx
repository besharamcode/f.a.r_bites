import React, { useEffect, useState } from "react";
import logo from "../assets/Logo-100.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="fixed top-0 flex w-full justify-between items-center body-padding py-4 bg-bg shadow-md">
      <div className="logo">
        <img className="md:h-16 h-[3.7rem]" src={logo} alt="FAR Bites" />
      </div>
      <nav
        id="navbar"
        className="absolute transition-all -top-[50rem] md:top-[unset] md:static bg-bg md:bg-transparent w-[98%] rounded-md left-1/2 md:translate-x-0 -translate-x-1/2 md:w-fit shadow-md md:shadow-none "
      >
        <div className="relative">
          <ul className="md:flex md:items-center md:justify-evenly md:gap-6 font-[Outfit-Medium] font-md text-md text-prm">
            {[
              { title: "Home", url: "#home" },
              { title: "Menu", url: "#menu" },
              { title: "Ratings", url: "#ratings" },
              { title: "About Us", url: "#about" },
              { title: "Contact Us", url: "#contact" },
            ].map((link) => {
              return (
                <li key={link.url} className="text-center md:text-start">
                  <a
                    href={`${link.url}`}
                    className={`p-1 nav-anim relative block mt-4 ${
                      activeLink === link.url ? "after:w-full" : ""
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
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
