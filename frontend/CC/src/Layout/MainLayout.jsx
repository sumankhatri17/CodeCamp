import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
