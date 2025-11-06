import React, { useContext } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="h-[45px] w-[30%]  rounded-full relative">
      <form action="">
        <input
          type="text"
          className=" text-[black] border-2 border-[#eee] h-[100%] w-[100%] rounded-full px-[20px] py-[7px] outline-none"
          placeholder="search here"
        />
      </form>
      <span className="absolute right-[5px] top-[4px] text-[30px] text-[#aba6a6] bg-blue-600 rounded-full p-1">
        <IoMdSearch className="text-white text-[24px]"  />
      </span>
    </div>
  );
};

export default SearchBar;
