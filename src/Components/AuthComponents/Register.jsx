import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import USERIMAGEICON from "../../Assets/Images/userRegisterImage.png";
import { GiAchievement } from "react-icons/gi";
import { AUTHCONTEXTAPI } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  let { setDataForOtpValidation, genrateOTP, setGenratedOtp } =
    useContext(AUTHCONTEXTAPI);
  let navigate = useNavigate();

  let initialRegistetState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isSubscribe: false,
    userImage: USERIMAGEICON,
    address: {
      city: "",
      state: "",
      country: "",
      completeAddress: "",
    },
    contact: "",
    dob: "",
    gender: "",
    resume: {
      linkedIn: "",
      gitHub: "",
      profile: "",
      expereince: [],
      projects: [],
      certificates: [],
      education: {
        degree: "",
        secondary: "",
        primary: "",
        diploma: "",
      },
      skills: [],
      hobbies: [],
      achievements: [],
    },
    oath: "",
  };

  let [registerData, setRegisterData] = useState(initialRegistetState);
  let { username, email, password, confirmPassword } = registerData;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (password == confirmPassword) {
      setDataForOtpValidation(registerData);
      let otp = genrateOTP();
      setGenratedOtp(otp);
      navigate("/otp_validation");
      setRegisterData(initialRegistetState);
    } else {
      toast.error("password and confirm password should be same ");
    }
  };
  return (
    <section className="h-[90vh] w-[100vw] flex justify-center items-center ">
      <article className=" w-[400px] bg-white shadow-md rounded-md p-[20px]">
        <header>
          <h1 className="text-center text-[24px] font-semibold">Register</h1>
        </header>
        <main>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="username"
                value={username}
                required
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="email"
                value={email}
                required
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="password"
                value={password}
                required
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Confirm password</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="confirmPassword"
                value={confirmPassword}
                required
              />

              <span className="text-red-500">
                {password != confirmPassword &&
                  confirmPassword.length > 0 &&
                  "please match password"}
              </span>
            </div>

            <div>
              {" "}
              <button className="w-[100%] bg-blue-600 text-white py-[7px] rounded-md cursor-pointer mt-[15px] hover:bg-[#2626fc] ">
                Submit
              </button>
            </div>
          </form>
        </main>

        <footer className="mt-[10px] cursor-pointer">
          <NavLink to={"/login"}>Already have an account ?</NavLink>
        </footer>
      </article>
    </section>
  );
};

export default Register;
