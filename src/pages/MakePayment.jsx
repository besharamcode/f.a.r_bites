import React, { useEffect, useState } from "react";
import qrCode from "../assets/qrcode.svg";
import { NavLink } from "react-router-dom";
import useMenu from "../hooks/useMenu";

const MakePayment = () => {
  const { getCurrentMenu } = useMenu();
  const [menu, setMenu] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const menu = getCurrentMenu(params.get("menuid"));
    if (!menu) {
      setMenu(null);
    }
    setMenu(menu);
    setQuantity(params.get("quantity"));
  }, [location.search]);

  useEffect(() => {
    if (menu) {
      setTotalPrice(quantity * menu.price);
    }
  }, [menu]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Perform actions before the component unloads
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div id="menu" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
      {menu && quantity && menu.id ? (
        <section className="h-full sm:mt-12 mt-8 pb-10">
          <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
            Make Payment
          </h2>
          <div className="mt-4">
            <p className="text-center font-[Outfit-Semibold]">
              Important: Please take screen shot of payment transaction for next
              step!
            </p>
          </div>
          <div className="code-container sm:w-1/2  mx-auto">
            <div className="qrcode mt-8 grid place-items-center md:w-3/5 sm:w-3/4 w-3/5 mx-auto">
              <img src={qrCode} alt="Error" className="w-full bg-white" />
            </div>
            <p className="text-center font-semibold">F.A.R_Bites@gpay</p>
            <NavLink
              to={`/order?menuid=${menu.id}&quantity=${quantity}`}
              className={`w-full`}
            >
              <button className="font-medium bg-prm px-5 py-2 rounded-full text-white mt-10 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-prm w-full">
                Rs. {totalPrice} Payment Done?
              </button>
            </NavLink>
          </div>
        </section>
      ) : (
        <div className="min-h-[100vh] grid place-items-center">
          <p className="font-[Outfit-Semibold]">Please choose correct menu!</p>
        </div>
      )}
    </div>
  );
};

export default MakePayment;
