import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AUTHContextAPI } from "../../Context/AuthContext";

const NewPassword = () => {
  let { allUsers, resetEmail } = useContext(AUTHContextAPI);
  let navigate = useNavigate();
  let initialLoginState = {
    newPassword: "",
    confirmNewPassword: "",
  };

  useEffect(() => {
    console.log(allUsers);
  });

  let [passwordData, setPasswordData] = useState(initialLoginState);

  let { newPassword, confirmNewPassword } = passwordData;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPasswordData({ ...passwordData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userdata = allUsers?.find((el) => {
        console.log(el.email);
        console.log(resetEmail);

        console.log(el.email == resetEmail);

        return el.email == resetEmail;
      });
      console.log(userdata);

      if (confirmNewPassword == newPassword) {
        await axios.patch(
          `http://localhost:5000/users/${userdata?.id}`,

          { password: newPassword }
        );
        toast.success("Password changed successfully");
        setPasswordData(initialLoginState);
        navigate("/login");
      } else {
        toast.error("Please match the password");
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <section className="h-[90vh] w-[100vw] flex justify-center items-center ">
      <article className=" w-[400px] bg-white shadow-md rounded-md p-[20px]">
        <header>
          <h1 className="text-center text-[24px] font-semibold">
            Enter new Password
          </h1>
        </header>
        <main>
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-1 flex-col">
              <label htmlFor="">New Password</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee]"
                name="newPassword"
                onChange={handleInputChange}
                value={newPassword}
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Confirm new Password</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee]"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <button className="w-[100%] bg-[#5454e9] text-[#eee] py-[7px] rounded-md cursor-pointer mt-[15px] hover:bg-[#2626fc] ">
                Reset Password
              </button>
            </div>
          </form>
        </main>

        <footer className="mt-[10px] cursor-pointer flex justify-between">
          <NavLink to={"/register"}>Don't have an Account ?</NavLink>
        </footer>
      </article>
    </section>
  );
};

export default NewPassword;
