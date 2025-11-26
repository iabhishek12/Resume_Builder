import React from "react";
import { FaImage, FaUserAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <section
      id="userSidebar"
      className="h-full w-full py-8 px-6 flex justify-between flex-col"
    >
      <article>
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink
              end
              to={"/user_profile"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <FaUserAlt /> <span>User Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"user_profile_update"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <ImProfile /> <span>Profile Update</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"update_profile_picture"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <FaImage /> <span>Picture Update</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to={"update_user_password"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <RiLockPasswordFill /> <span>Update Password</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"delete_user_account"}
              style={({ isActive }) => ({ background: isActive ? "red" : "" })}
              className="flex items-center gap-3 text-red-700 font-semibold py-1 px-2 rounded-md"
            >
              <MdDeleteForever /> <span>Delete Account</span>
            </NavLink>
          </li>
        </ul>
      </article>

      <article>
        <NavLink className="flex gap-3 items-center text-lg rounded-md text-red-600 py-1 px-2">
          <IoLogOut /> <span>Logout</span>
        </NavLink>
      </article>
    </section>
  );
};

export default UserSidebar;
