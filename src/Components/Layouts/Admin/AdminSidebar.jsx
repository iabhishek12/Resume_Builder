import React from "react";
import { AiFillDashboard, AiOutlineDashboard } from "react-icons/ai";
import { FaImage, FaRupeeSign, FaUserAlt, FaUsers } from "react-icons/fa";
import { ImBlocked, ImProfile } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { PiReadCvLogoBold } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { VscVersions } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
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
              to={"/admin"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <AiOutlineDashboard className="text-[20px]" />{" "}
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"all_users"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <FaUsers className="text-[20px]" /> <span>All Users</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"all_transactions"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <FaRupeeSign className="text-[20px]" />{" "}
              <span>All Transaction</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"all_blocked_users"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <ImBlocked className="text-[20px]" />{" "}
              <span>All Blocked users</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"all_templates"}
              className="flex items-center gap-3 font-semibold py-1 px-2 rounded-md"
            >
              <VscVersions className="text-[20px] " />{" "}
              <span>All Templates</span>
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

export default AdminSidebar;
