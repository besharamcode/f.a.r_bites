import React, { createContext } from "react";
import brownie from "../assets/brownie.svg";
import browniewithegg from "../assets/browniewithegg.svg";
import Waffles from "../assets/Waffles.svg";
import rasmalai from "../assets/rasmalai-cake.svg";
import donuts from "../assets/donuts.svg";
import churros from "../assets/churros.svg";
import cookies from "../assets/cookies.svg";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
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
      name: "Rasmalai cake (1kg)",
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
  return (
    <MenuContext.Provider value={{ menus }}>{children}</MenuContext.Provider>
  );
};

export default MenuProvider;
