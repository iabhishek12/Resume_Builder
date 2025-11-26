// MainUserLayout.jsx
import React from "react";
import NavbarMainConatiner from "../../NavbarComponents/NavbarMainConatiner";
import UserSidebar from "./UserSidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainUserLayout = () => {
  return (
    <section className="min-h-screen flex flex-col bg-gray-50">
      <Toaster />
      <NavbarMainConatiner />

      <section className="flex flex-1  ">
      
        <aside className="sticky top-[70px] h-[calc(100vh-70px)] w-[16%] bg-white shadow-md">
          <UserSidebar />
        </aside>

        
        <aside className="w-[84%] p-6 overflow-y-auto flex justify-center items-center">
          <Outlet />
        </aside>
      </section>
    </section>
  );
};

export default MainUserLayout;
