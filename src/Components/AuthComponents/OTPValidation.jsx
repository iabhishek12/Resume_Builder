import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AUTHCONTEXTAPI } from "../../Context/AuthContext";

const OTPValidation = () => {
  let { signUp, dataForOtpValidation, genratedOtp } =
    useContext(AUTHCONTEXTAPI);
  let navigate = useNavigate();
  let [timer, setTimer] = useState(60);

  useEffect(() => {
    setInterval(() => {
      setTimer(timer--);
    }, 1000);
  }, []);

  let initialOtpState = {
    box1: "",
    box2: "",
    box3: "",
    box4: "",
  };

  useEffect(() => {
    toast.success("Enter Otp");
    toast.success(genratedOtp);
  }, []);

  let [otpValidData, setOtpValidData] = useState(initialOtpState);

  let { box1, box2, box3, box4 } = otpValidData;

  let box1Ref = useRef();
  let box2Ref = useRef();
  let box3Ref = useRef();
  let box4Ref = useRef();

  let handleOtpChange = (e, inpRef) => {
    let value = e.target.value;
    let name = e.target.name;

    if ("0123456789".includes(value)) {
      setOtpValidData({ ...otpValidData, [name]: value });
      if (value.length == "1" && inpRef) {
        inpRef.current.focus();
      }
    }
  };

  let handleSubmitOtp = async (e) => {
    e.preventDefault();

    let userFinalOtp = `${otpValidData.box1}${otpValidData.box2}${otpValidData.box3}${otpValidData.box4}`;

    if (userFinalOtp == genratedOtp) {
      if (await signUp(dataForOtpValidation)) {
        navigate("/login");
      } else {
        navigate("/register");
      }
    } else {
      toast.error("Ivalid Otp");
    }
  };

  let handleBackspace = (e, prevref) => {
    if (e.key == "Backspace" && e.target.value === "" && prevref) {
      prevref.current.focus();
    }
  };
  return (
    <section className="h-[calc(100vh-70px)] w-[100%] flex justify-center items-center ">
      <article className="h-[400px] w-[450px] bg-white p-[20px] flex flex-col justify-evenly">
        <header className="text-center">
          <h1 className="font-semibold text-2xl">OTP Validation</h1>
          <p>
            We have Successfully sent <span className=" font-bold">OTP</span> to{" "}
          </p>
          <span>email</span>
        </header>

        <main>
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleSubmitOtp}
          >
            <label htmlFor="">Enter code here</label>

            <div className="flex justify-evenly">
              <input
                type="tel"
                maxLength={1}
                className="h-[75px] w-[75px] rounded-lg border text-center text-5xl  outline-none caret-transparent"
                onChange={(e) => {
                  handleOtpChange(e, box2Ref);
                }}
                value={box1}
                name="box1"
                ref={box1Ref}
              />
              <input
                type="tel"
                maxLength={1}
                className="h-[75px] w-[75px] rounded-lg border text-center text-5xl  outline-none caret-transparent"
                onChange={(e) => {
                  handleOtpChange(e, box3Ref);
                }}
                value={box2}
                name="box2"
                ref={box2Ref}
                onKeyDown={(e) => {
                  handleBackspace(e, box1Ref);
                }}
              />
              <input
                type="tel"
                maxLength={1}
                className="h-[75px] w-[75px] rounded-lg border text-center text-5xl  outline-none caret-transparent"
                onChange={(e) => {
                  handleOtpChange(e, box4Ref);
                }}
                value={box3}
                name="box3"
                ref={box3Ref}
                onKeyDown={(e) => {
                  handleBackspace(e, box2Ref);
                }}
              />
              <input
                type="tel"
                maxLength={1}
                className="h-[75px] w-[75px] rounded-lg border text-center text-5xl  outline-none caret-transparent"
                onChange={handleOtpChange}
                value={box4}
                name="box4"
                ref={box4Ref}
                onKeyDown={(e) => {
                  handleBackspace(e, box3Ref);
                }}
              />
            </div>

            <div>
              <button className="w-[100%] bg-blue-600 font-semibold text-white py-[7px] rounded-md cursor-pointer mt-[15px] hover:bg-[#2626fc] ">
                Verify
              </button>
            </div>
          </form>
        </main>

        <footer>
          <p>Didn't recieve otp</p>
          <span>
            Resend otp in <span className="text-red-600">{timer}</span>
          </span>
        </footer>
      </article>
    </section>
  );
};

export default OTPValidation;
