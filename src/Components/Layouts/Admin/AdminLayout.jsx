import React from "react";
import NavbarMainConatiner from "../../NavbarComponents/NavbarMainConatiner";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  return (
    <section>
      <Toaster />
      <header>
        <NavbarMainConatiner />
      </header>

      <main className="flex h-[calc(100vh-70px)]">
        <aside className="w-[16%] bg-white">
          <AdminSidebar />
        </aside>
        <aside className="w-[84%] flex justify-center items-center">
          <Outlet />
        </aside>
      </main>
    </section>
  );
};

export default AdminLayout;
