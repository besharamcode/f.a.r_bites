import React from "react";
import Image from "../assets/logo.jpg";
import brownie from "../assets/brownie.svg";
import browniewithegg from "../assets/browniewithegg.svg";
import Waffles from "../assets/Waffles.svg";
import rasmalai from "../assets/rasmalai-cake.svg";
import donuts from "../assets/donuts.svg";
import churros from "../assets/churros.svg";
import cookies from "../assets/cookies.svg";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const menus = [
    {
      id: 1,
      name: "Brownies",
      description:
        "Rich, fudgy goodness awaits with each bite of our classic brownies. Indulge in premium chocolate perfection.",
      price: 2.99,
      imgSrc: browniewithegg,
    },
    {
      id: 2,
      name: "Eggless Brownies",
      description:
        "Enjoy the same irresistible taste and texture as our classic brownies, but without eggs. Perfect for vegans or those with dietary preferences.",
      price: 2.99,
      imgSrc: brownie,
    },
    {
      id: 3,
      name: "Waffles",
      description:
        "Crispy outside, fluffy inside, our waffles are a delicious treat any time of day. Customize with your favorite toppings.",
      price: 2.99,
      imgSrc: Waffles,
    },
    {
      id: 4,
      name: "Rasmalai cake",
      description:
        "Fusion at its finest! Delicate sponge cake infused with cardamom and saffron, layered with creamy rasmalai and topped with pistachios.",
      price: 2.99,
      imgSrc: rasmalai,
    },
    {
      id: 5,
      name: "Donuts",
      description:
        "Freshly fried and glazed to perfection, our donuts come in classic and adventurous flavors to satisfy every craving.",
      price: 2.99,
      imgSrc: donuts,
    },
    {
      id: 6,
      name: "Churros",
      description:
        "Crispy and golden, sprinkled with cinnamon sugar and served with chocolate dipping sauce, our churros are a taste of Spain's streets.",
      price: 2.99,
      imgSrc: churros,
    },
    {
      id: 7,
      name: "Cookies",
      description:
        "Baked fresh daily, choose from a variety of classic and specialty cookies to satisfy your sweet tooth.",
      price: 2.99,
      imgSrc: cookies,
    },
  ];
  const cardsContainer = document.querySelector("#cards");
  console.log(cardsContainer);
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
                  to={`/order?menuid=${menu.id}`}
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
