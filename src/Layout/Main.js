import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
import MarqueeText from "../Pages/Home/MarqueeText/MarqueeText";

const Main = () => {
  return (
    <div>
      <MarqueeText />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
