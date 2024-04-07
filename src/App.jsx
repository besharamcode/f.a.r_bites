import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Ratings from "./components/Ratings";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-full hide-scrollbar">
      <Header />
      <Hero />
      <Menu />
      <Ratings />
      <About />
      <Contact />
    </div>
  );
};

export default App;
