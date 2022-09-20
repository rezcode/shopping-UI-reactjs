import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const WithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default WithNavbar;
