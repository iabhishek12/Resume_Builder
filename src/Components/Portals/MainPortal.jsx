import React from "react";
import { createPortal } from "react-dom";

const MainPortal = ({ children }) => {
  
  return createPortal(
    <section className="h-[100vh] w-[100vw] bg-[#1111113e] fixed top-0 left-0 z-100 flex justify-center items-center">
      {children}
    </section>,
    document.getElementById("myportal")
  );
};

export default MainPortal;
