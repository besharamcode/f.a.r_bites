import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMenu from "./pages/SingleMenu";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<SingleMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
