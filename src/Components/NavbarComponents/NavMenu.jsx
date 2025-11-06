import React, { useContext } from "react";
import { NavLink } from "react-router-dom";


const NavMenu = () => {

  return (
    <ul className="flex gap-4 ">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contactus"}>ContactUs</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>

     
    </ul>
  );
};

export default NavMenu;
