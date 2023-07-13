import React from "react";
import logoWhite from "../assets/Logowhite.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";

const Footer = () => {
  return (
    <div className="w-full max-w-5xl  text-greyscaleG7 space-y-8 py-16  px-6 md:px-0 ">
      <div className="w-full max-w-5xl flex justify-between items-center pb-8">
        <img src={logoWhite} alt="logo" />
        <p className="text-xs w-[200px] pl-4 text-end">
          Tickete Inc. 1013 Centre Road Suite 403 B Wilmington DE 19805
        </p>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row justify-between my-8 ">
        <div className="flex space-x-3 mt-10 md:mt-0">
          <span className=" cursor-pointer">© Tickete Inc.</span>
          <span>•</span>
          <span className=" cursor-pointer">Privacy</span>
          <span>•</span>
          <span className=" cursor-pointer">Terms</span>
          <span>•</span>
          <span className=" cursor-pointer">Cancellation policy</span>
        </div>
        <div className="flex space-x-3">
          <img className=" cursor-pointer" src={Instagram} alt="insta" />
          <img className=" cursor-pointer" src={Facebook} alt="face" />
          <img className=" cursor-pointer" src={Twitter} alt="twitt" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
