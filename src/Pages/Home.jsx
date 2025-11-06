import React from "react";
import heroImg from "../Assets/Images/heroImage.png"; // 🖼️ replace with your image path

const HeroSection = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center justify-between px-8 md:px-16 h-[calc(100vh-70px)]  ">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Build Your <span className="text-blue-600">Professional Resume</span>{" "}
          Effortlessly
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
          Create an impressive resume in minutes with our easy-to-use builder.
          Choose templates, customize your details, and get hired faster.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={heroImg}
          alt="Resume Builder"
          className="w-[350px]  md:w-[500px] drop-shadow-lg rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
