import React from "react";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-12 py-4">
      <Logo />
      <nav className="hidden md:block">
        <ul className="flex items-center justify-evenly gap-6 font-[Satoshi-medium] font-md text-lg text-prm">
          {["Home", "Menu", "Ratings", "About Us", "Contact Us"].map((item) => {
            return (
              <li key={item}>
                <a href={`#${item}`} className="p-1 w-full nav-anim relative">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="md:hidden">
        <FontAwesomeIcon className="text-prm text-2xl" icon={faBars} />
      </button>
    </div>
  );
};

export default Header;
