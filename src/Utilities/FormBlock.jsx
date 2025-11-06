import React from "react";

const FormBlock = ({ name, label, type, value, onchange, placeholder }) => {
  return (
    <div className=" w-[48%] flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
        className="py-1.5 px-2 outline-0 border-2 rounded-md  border-[#e6e4e4]"
      />
    </div>
  );
};

export default FormBlock;
