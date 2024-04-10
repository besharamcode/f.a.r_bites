import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMenu from "./pages/SingleMenu";
import Home from "./pages/Home";
import MakePayment from "./pages/MakePayment";
import MakeOrder from "./pages/MakeOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<SingleMenu />} />
        <Route path="/payment" element={<MakePayment />} />
        <Route path="/order" element={<MakeOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
