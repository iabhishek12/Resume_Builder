import React from "react";
import { FaImage, FaUserAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <section id="userSidebar" className="h-[100%] w-[100%]  py-8 px-8 flex justify-between flex-col">
      <article>
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink end to={"/user_profile"} className="flex items-center gap-3  font-semibold  py-1 px-2 rounded-md ">
              <span>
                <FaUserAlt />
              </span>
              <span>User Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"user_profile_update"} className="flex items-center gap-3   font-semibold  py-1 px-2 rounded-md ">
              <span>
              <ImProfile />
              </span>
              <span>Profile Update</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"update_prodile_picture"} className="flex items-center gap-3   font-semibold  py-1 px-2 rounded-md ">
              <span>
                <FaImage />
              </span> 
              <span>Picture Update</span>
            </NavLink>
          </li>


          <li>
            <NavLink to={"update_user_password"} className="flex items-center gap-3   font-semibold  py-1 px-2 rounded-md ">
              <span>
                <RiLockPasswordFill />
              </span>
              <span>Update Password</span>
            </NavLink>
          </li>


          <li>
            <NavLink style={({isActive})=>{return {background:isActive && "red"}}}  to={"delete_user_account"} className="flex items-center  gap-3  text-red-700 font-semibold  py-1 px-2 rounded-md ">
              <span>
               <MdDeleteForever />
              </span>
              <span>Delete Account</span>
            </NavLink>
          </li>

         
        </ul>
      </article>
      <article>
        <NavLink className={"flex gap-3 items-center text-lg rounded-md text-red-600 py-1 px-2"}><span><IoLogOut /></span><span>Logout</span></NavLink>

      </article>
    </section>
  );
};

export default UserSidebar;
