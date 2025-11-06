import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import AuthMenu from "./AuthMenu";

const NavbarMainConatiner = () => {
  return (
    <section className="h-[70px] w-[100vw]   bg-white shadow-md">
      <nav className="h-[100%] w-[95%]  m-auto flex justify-between items-center">
        <Logo />
        <SearchBar />
        <NavMenu />
        <AuthMenu />
      </nav>
    </section>
  );
};

export default NavbarMainConatiner;
