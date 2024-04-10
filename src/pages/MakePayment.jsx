import React, { useEffect, useState } from "react";
import qrCode from "../assets/qrcode.svg";
import { NavLink } from "react-router-dom";
import QRCode from "qrcode";

const MakePayment = () => {
  const [menuid, setMenuid] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const generateQR = async (text) => {
    try {
      const QrCode = await QRCode.toDataURL(
        "https://besharamcode.netlify.app/",
        { errorCorrectionLevel: "H", scale: 8 }
      );
      document.querySelector(".qrcode").innerHTML = `<img src=${QrCode} />`;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateQR();
    const params = new URLSearchParams(location.search);
    setMenuid(params.get("menuid"));
    setQuantity(params.get("quantity"));
  }, [location.search]);
  return (
    <div id="menu" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
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
          <div className="qrcode mt-8 grid place-items-center">
            <img src={""} alt="Error" className="w-[80rem]" />
          </div>
          <p className="text-center font-semibold">F.A.R_Bites@gpay</p>
          <NavLink
            to={`/order?menuid=${menuid}&quantity=${quantity}`}
            className={`w-full`}
          >
            <button className="font-medium bg-prm px-5 py-2 rounded-full text-white mt-10 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-prm w-full">
              Payment Done?
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default MakePayment;
