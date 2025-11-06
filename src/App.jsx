import React from "react";
import "./Globalcss.css";
import { Outlet } from "react-router-dom";
import NavbarMainConatiner from "./Components/NavbarComponents/NavbarMainConatiner";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
      <Toaster />
      <NavbarMainConatiner />

      <Outlet />
    </div>
  );
};

export default App;
