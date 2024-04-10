import React from "react";
import { NavLink } from "react-router-dom";
import useMenu from "../hooks/useMenu";

const Menu = () => {
  const { menus } = useMenu();
  const cardsContainer = document.querySelector("#cards");
  return (
    <div id="menu" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
      <section className="h-full md:mt-24 mt-20 ">
        <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
          Menu
        </h2>
        <div
          id="menu-cards"
          className="menu-cards flex justify-center flex-wrap sm:gap-16 gap-8 md:mt-20 mt-16 font-[Outfit-Medium]"
        >
          {menus.map((menu) => {
            return (
              <div
                className="card w-[20rem]  border-2 border-prm rounded-2xl overflow-hidden relative flex flex-col"
                key={menu.id}
              >
                <div className="card-img">
                  <img
                    src={menu.imgSrc}
                    alt={menu.name}
                    className="border-b-2 w-full object-cover border-b-prm p-8"
                  />
                </div>
                <div className="card-info px-3 py-2">
                  <h3 className="text-lg">{menu.name}</h3>
                  <p className="text-sm font-[Outfit-Light]">
                    {menu.description}
                  </p>
                  <p className="font-medium absolute top-0 bg-prm left-0 py-1 px-2 text-white rounded-br-xl">
                    Rs. {menu.price}
                  </p>
                </div>
                <NavLink
                  data-id={menu.id}
                  to={`/menu?menuid=${menu.id}`}
                  className="mt-auto"
                >
                  <button className="text-white w-full text-center block bg-prm py-2">
                    Order Now
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Menu;
