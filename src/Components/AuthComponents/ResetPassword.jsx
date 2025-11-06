import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const ResetPassword = () => {

 let handleSubmit=()=>{

 }
  return (
    <section className="h-[90vh] w-[100vw] flex justify-center items-center ">
      <article className=" w-[400px] bg-white shadow-md rounded-md p-[20px]">
        <header>
          <h1 className="text-center text-[24px] font-semibold">
            Reset Password
          </h1>
        </header>
        <main>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee]"
               
              />
            </div>

            <div>
              <button className="w-[100%] bg-blue-600 text-[#eee] py-[7px] rounded-md cursor-pointer mt-[15px] hover:bg-[#2626fc] ">
                Reset Password
              </button>
            </div>
          </form>
        </main>

        <footer className="mt-[20px] cursor-pointer flex justify-between">
          <NavLink to={"/login"}>Already know password ?</NavLink>
          <NavLink className={"text-red-600"} to={"/register"}>
            Don't have an account ?
          </NavLink>
        </footer>
      </article>
    </section>
  );
};

export default ResetPassword;
