import React, { useEffect, useState } from "react";
import useMenu from "../hooks/useMenu";
import { createData, uploadImg } from "../lib/APIFunctions";
import { useNavigate } from "react-router-dom";

const MakeOrder = () => {
  const { getCurrentMenu } = useMenu();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({
    menu: null,
    quantity: null,
    name: null,
    email: null,
    mobile: null,
    address: null,
    transactionImg: null,
  });
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
      setForm({ ...form, menu, quantity });
    }
  }, [menu]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImgInputChange = async (e) => {
    const { name, files } = e.target;
    const formData = new FormData();
    formData.append("transactionReceipt", files[0]);
    const response = await uploadImg("order/upload", formData);
    if(response.success){
      setForm({ ...form, [name]: response.data.path });
    }else{
      alert(response.message)
    }
  };

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

  const confirmOrder = async () => {
    const { name, email, mobile, address, transactionImg, menu } = form;
    if (!name || !email || !mobile || !address || !transactionImg || !menu) {
      alert("Please fill all the fields");
    } else {
      const confirm = window.confirm("Are you sure?");
      if (confirm) {
        const response = await createData("order/create", form);
        if (response.success) {
          alert(response.message);
          navigate("/");
        } else {
          alert(response.message);
        }
      }
    }
  };

  return (
    <div id="menu" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
      {menu && quantity && menu.id ? (
        <section className="h-full sm:mt-12 mt-8 pb-10">
          <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
            Confirm Order
          </h2>
          <div className="mt-8 w-11/12 mx-auto sm:w-2/3 md:w-1/2 ">
            <div className="">
              <img
                src={menu.imgSrc}
                alt={menu.name}
                className="w-[5rem] mx-auto drop-shadow-xl"
              />
            </div>
            <div className="menu-details font-[Outfit-Medium] flex justify-between mt-4 items-start">
              <div>
                <p>{menu.name}</p>
                <p>Total Amount</p>
              </div>
              <div>
                <p className="">Rs. {menu.price}</p>
                <p>Rs. {menu.price * quantity}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <form className=" shadow-[0_2px_8px_0.01px_#0005] rounded-xl flex flex-col px-8 py-4 gap-4 w-11/12 mx-auto sm:w-2/3 md:w-1/2">
              <h3 className="font-[Outfit-Medium] text-[1.2rem] text-center">
                Confirmation form
              </h3>
              <input
                name="name"
                id="name"
                autoComplete="true"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-1 w-full"
                type="text"
                placeholder="Your name"
                onChange={handleInputChange}
              />
              <input
                name="email"
                id="email"
                autoComplete="true"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-1 w-full"
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <input
                name="mobile"
                id="mobile"
                autoComplete="true"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-1 w-full"
                type="number"
                placeholder="Your Mobile"
                onChange={handleInputChange}
              />
              <input
                name="address"
                id="address"
                autoComplete="true"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-1 w-full"
                type="text"
                placeholder="Delivery Address"
                onChange={handleInputChange}
              />
              <input
                name="transactionImg"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-1 w-full"
                type="file"
                placeholder="Delivery Address"
                onChange={handleImgInputChange}
              />
              <button
                className="font-medium bg-prm px-5 py-2 rounded-full text-white mt-2 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-prm w-full"
                type="button"
                onClick={confirmOrder}
              >
                Submit
              </button>
            </form>
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

export default MakeOrder;
