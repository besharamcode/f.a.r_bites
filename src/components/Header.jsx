import React from "react";

import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="fixed top-0 w-full flex sm:justify-between items-center px-12 py-4">
      <div className="logo">
        <img src={logo} alt="F.A.R Bites" width={100} />
      </div>
      <nav>
        <ul className="flex items-center gap-6 font-[Satoshi-medium] font-md text-lg text-[#79321b]">
          <li>
            <a href="#home" className="p-1 w-full nav-anim relative">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="p-1 w-full nav-anim relative">
              Menu
            </a>
          </li>
          <li>
            <a href="#ratings" className="p-1 w-full nav-anim relative">
              Ratings
            </a>
          </li>
          <li>
            <a href="#about" className="p-1 w-full nav-anim relative">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="p-1 w-full nav-anim relative">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;