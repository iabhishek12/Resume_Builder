import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AUTHCONTEXTAPI } from "../../Context/AuthContext";

const Login = () => {
  let navigate = useNavigate();

  let { login } = useContext(AUTHCONTEXTAPI);

  let initialLoginState = {
    email: "",
    password: "",
  };

  let [loginData, setLoginData] = useState(initialLoginState);

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  let { email, password } = loginData;

  let handleSubmit = (e) => {
    e.preventDefault();

    login(loginData);

    navigate("/");
  };

  return (
    <section className="h-[90vh] w-[100vw] flex justify-center items-center ">
      <article className=" w-[400px] bg-white shadow-md rounded-md p-[20px]">
        <header>
          <h1 className="text-center text-[24px] font-semibold">Login</h1>
        </header>
        <main>
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className=" px-2 border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee]"
                name="email"
                onChange={handleInputChange}
                value={email}
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className=" px-2 border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee]"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <button className="w-[100%] bg-blue-600 text-white py-[7px] rounded-md cursor-pointer mt-[15px] hover:bg-[#2626fc] ">
                Submit
              </button>
            </div>
          </form>
        </main>

        <footer className="mt-[10px] cursor-pointer flex justify-between">
          <NavLink to={"/register"}>Don't have an Account ?</NavLink>
          <NavLink className={"text-red-600"} to={"/forget_password"}>
            Forget password ?
          </NavLink>
        </footer>
      </article>
    </section>
  );
};

export default Login;
