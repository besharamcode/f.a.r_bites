import React, { useContext } from "react";
import { MenuContext } from "../context/useMenuContext";

const useMenu = () => {
  const { menus } = useContext(MenuContext);
  const getCurrentMenu = (id) => {
    return menus.find((menu) => menu.id == id);
  };
  return {
    menus,
    getCurrentMenu,
  };
};

export default useMenu;
