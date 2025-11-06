import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AUTHCONTEXTAPI } from "../../Context/AuthContext";


const AuthMenu = () => {
  let {isAuth , logout}= useContext(AUTHCONTEXTAPI)


  return (
    <ul className="flex gap-1 items-center ">
     
        {isAuth!=null || window.localStorage.getItem("USERTOKEN") ? 
        <>
          <li>
            <NavLink to={"/user_profile"}> <img className="h-[50px] w-[50px] mr-4"  src={isAuth?.userImage} alt="" /> </NavLink>
          </li>
          
          <li>
            <NavLink to={""} onClick={()=>logout()}>Logout</NavLink>
          </li>
        </> 

        :<>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          /
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </> }
    
    </ul>
  );
};

export default AuthMenu;
