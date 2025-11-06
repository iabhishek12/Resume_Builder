import React, { useContext, useState } from "react";
import { AUTHCONTEXTAPI } from "../../../Context/AuthContext";
import { LuBadgeDollarSign } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import COMPLETEPROFILEICON from '../../../Assets/Icons/completeProfiil.png'
const UserProfile = () => {
  let { isAuth } = useContext(AUTHCONTEXTAPI);
  let [isSbcribed, setIsSubScribe] = useState(true);
  return (
    <section>
      <article className="h-[450px] w-[750px] bg-white rounded-lg">
        <header className="h-[120px] w-[100%] bg-blue-600 rounded-t-lg  relative px-4 flex items-center justify-between">
          <div className="h-[125px] w-[125px] animate-bounce rounded-[50%] bg-white absolute top-[-50px] left-[calc(50%-62px)]">
            <picture>
              <img src={isAuth?.userImage} alt="" />
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
        <footer>
            {isAuth?.contact != "" ? (
            <div>User details</div>
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
        </footer>
      </article>
    </section>
  );
};

export default UserProfile;
