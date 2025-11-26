import React, { useContext, useState } from "react";
import { AUTHCONTEXTAPI } from "../../../Context/AuthContext";
import { LuBadgeDollarSign } from "react-icons/lu";
import COMPLETEPROFILEICON from "../../../Assets/Icons/completeProfiil.png";
import { NavLink } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { TbCameraPlus } from "react-icons/tb";

const UserProfile = () => {
  let { isAuth } = useContext(AUTHCONTEXTAPI);
  let [isSbcribed, setIsSubScribe] = useState(false);

  return (
    <section>
      <article className="h-[450px] w-[750px] bg-white rounded-lg">
        <header className="h-[120px] w-[100%] bg-blue-600 rounded-t-lg  relative px-4 flex items-center justify-between">
          <div className="h-[125px] w-[125px]  rounded-[50%] bg-white p-1 absolute top-[-50px] left-[calc(50%-62px)]">
            <picture className="relative">
              <img
                src={isAuth?.userImage}
                className="rounded-full h-full w-full"
                alt=""
              />

              <NavLink to={"update_profile_picture"}>
                <span className=" absolute right-[-10px] text-[24px] bottom-7 bg-white rounded-full text-blue-600 p-0.5 cursor-pointer">
                  <TbCameraPlus />
                </span>
              </NavLink>
            </picture>
          </div>

          <div className="flex flex-col text-white">
            <span className="text-[20px]">{isAuth?.username}</span>
            <span>{isAuth?.email}</span>
          </div>

          <div
            className="flex flex-col text-white relative "
            onClick={() => setIsSubScribe(!isSbcribed)}
          >
            {isSbcribed ? (
              <span className="h-[60px] w-[60px] bg-white absolute rounded-full right-[-10px] top-[-12px]  flex justify-center items-center text-[50px] transition-all duration-200">
                <LuBadgeDollarSign className="text-blue-600" />
              </span>
            ) : (
              <span className="h-[60px] w-[60px] bg-white absolute rounded-full left-[-20px] top-[-12px]  flex justify-center items-center text-[50px]">
                <LuBadgeDollarSign className="text-blue-600" />
              </span>
            )}

            {/* ?   */}

            {isSbcribed ? (
              <span className="w-[200px]  rounded-2xl bg-white text-black font-semibold text-center py-1">
                Subscribed
              </span>
            ) : (
              <span className="w-[200px]  rounded-2xl bg-white text-black font-semibold text-center py-1">
                Subscribe
              </span>
            )}
          </div>
        </header>

        {/* ? footer code here  */}
        <footer className="relative">
          {isAuth?.contact != "" ? (
            <article className="flex justify-evenly items-center h-[300px] flex-wrap py-2">
              <div className="bg-[#eee] flex flex-col w-[40%] justify-center items-center rounded-md py-1">
                <span className="font-semibold text-[18px]">Contact</span>
                <span className="text-blue-600">{isAuth?.contact}</span>
              </div>
              <div className="bg-[#eee] flex w-[40%] py-1  flex-col justify-center items-center rounded-md">
                <span className="font-semibold text-[18px]">Dob</span>
                <span className="text-blue-600">{isAuth?.dob}</span>
              </div>
              <div className="bg-[#eee] flex w-[40%] py-1  flex-col justify-center items-center rounded-md">
                <span className="font-semibold text-[18px]">Gender</span>
                <span className="text-blue-600">{isAuth?.gender}</span>
              </div>
              <div className="bg-[#eee] flex w-[40%] py-1  flex-col justify-center items-center rounded-md">
                <span className="font-semibold text-[18px]">Linked in Url</span>
                <span className="text-blue-600">{isAuth?.resume.linkedIn}</span>
              </div>
              <div className="bg-[#eee] flex w-[86%] py-1  flex-col justify-center items-center rounded-md">
                <span className="font-semibold text-[18px]">
                  Complete Address
                </span>
                <span className="text-blue-600">
                  {isAuth?.address?.completeAddress +
                    " , " +
                    isAuth?.address?.state +
                    " , " +
                    isAuth?.address?.country}
                </span>
              </div>
              <div className="bg-[#eee] flex w-[86%] py-1  flex-col justify-center items-center rounded-md">
                <span className="font-semibold text-[18px]">Contact</span>
                <span className="text-blue-600">{isAuth?.contact}</span>
              </div>
            </article>
          ) : (
            <div className="h-full w-full flex flex-col items-center">
              <header>
                <img src={COMPLETEPROFILEICON} className="h-[250px]" alt="" />
              </header>
              <footer>
                <NavLink to={"user_profile_update"}>
                  <button className="bg-blue-600 cursor-pointer text-white py-1 px-4 rounded-lg">
                    Complete Profile
                  </button>
                </NavLink>
              </footer>
            </div>
          )}

          <NavLink to={"user_profile_update"}>
            <span className="flex items-center gap-2 absolute text-blue-600 right-3 bottom-[-30px] text-[20px] font-semibold cursor-pointer ">
              Edit details <MdOutlineEdit />
            </span>
          </NavLink>
        </footer>
      </article>
    </section>
  );
};

export default UserProfile;
