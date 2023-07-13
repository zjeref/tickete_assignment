import React from "react";
import questionIcon from "../assets/Question.svg";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-6 text-greyscaleG2 mb-[100px]">
      <img className="h-6" src={logo} alt="logo" />
      <div className="flex">
        <img src={questionIcon} alt="question Icon" />
        <span className="text-base">Help</span>
      </div>
    </div>
  );
};

export default Navbar;
