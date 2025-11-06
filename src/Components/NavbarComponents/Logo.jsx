import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../Assets/Icons/favicon.png"

const Logo = () => {
  return (
    <picture>
      <NavLink to={"/"} className={"flex items-center gap-2"}>
        <img
          src={LOGO}
          alt=""
          className="h-[35px]   "
        />

        <p className="text-xl flex gap-1 font-semibold"><span>Resume</span><span className="text-blue-600">Builder</span></p>
      </NavLink>
    </picture>
  );
};

export default Logo;
