import React, { useEffect, useState } from "react";
import useMenu from "../hooks/useMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SingleMenu = () => {
  const [menuid, setMenuid] = useState(null);
  const [menu, setMenu] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { getCurrentMenu } = useMenu();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("menuid");
    setMenuid(query);
  }, [location.search]);

  useEffect(() => {
    if (menuid) {
      const menu = getCurrentMenu(menuid);
      if (menu) {
        setMenu(menu);
        setTotalPrice(menu.price * quantity);
      }
    }
  }, [menuid]);

  useEffect(() => {
    setTotalPrice(menu.price * quantity);
  }, [quantity]);

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

  if (!menuid)
    return (
      <div id="menu" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
        <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
          Please select any menu from menu card
        </h2>
      </div>
    );

  return (
    <div id="menu" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
      <section className="h-full sm:mt-12 mt-8 pb-10">
        <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
          Menu
        </h2>
        <div className="flex justify-center mt-10">
          {menu && menu.name ? (
            <div className="menu-card relative flex flex-col">
              <div className="card-img">
                <img
                  src={menu.imgSrc}
                  alt={menu.name}
                  className=" w-[15rem] object-cover border-b-prm p-8 mx-auto"
                />
              </div>
              <div className="card-info px-3 py-2 border-t-prm border-t-2 ">
                <h3 className="text-lg font-[Outfit-Medium]">{menu.name}</h3>
                <p className="text-sm font-[Outfit-Light]">
                  {menu.description}
                </p>
                <p className="text-base font-[Outfit-Medium] bg-prm text-white px-3 py-1 rounded absolute top-8">
                  Rs. {menu.price.toFixed(2)}
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-6 border-prm border-2 rounded-full">
                    <button
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                      className="font-bold text-lg bg-prm text-white size-8 grid place-items-center rounded-full"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <p className="text-lg font-[Outfit-Medium]">{quantity}</p>
                    <button
                      onClick={() => {
                        setQuantity(quantity < 2 ? 1 : quantity - 1);
                      }}
                      className="font-bold text-lg bg-prm text-white size-8 grid place-items-center rounded-full"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                  <p className="text-lg font-[Outfit-Medium]">
                    Total: Rs. {totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <NavLink
                to={`/payment?menuid=${menuid}&quantity=${quantity}`}
                className={`w-full`}
              >
                <button className="font-medium bg-prm px-5 py-2 rounded-full text-white mt-10 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-prm w-full">
                  Make Payment
                </button>
              </NavLink>
            </div>
          ) : (
            <h1>No Menu Found</h1>
          )}
        </div>
      </section>
    </div>
  );
};

export default SingleMenu;
