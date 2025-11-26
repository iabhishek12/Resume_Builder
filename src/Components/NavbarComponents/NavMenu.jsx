import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AUTHCONTEXTAPI } from "../../Context/AuthContext";

const NavMenu = () => {
  let { isAuth } = useContext(AUTHCONTEXTAPI);
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

      {isAuth?.role == "admin" && (
        <li>
          <NavLink to={"/admin"}>Admin</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavMenu;
