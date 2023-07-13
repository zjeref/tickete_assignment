import React, { useState } from "react";
import Minus from "../../assets/Minus.svg";

const FAQDropdown = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b-[1px] py-6 space-y-3">
      <div
        className="flex relative items-center text-greyscaleG2 justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold text-greyscaleG3">{label}</h2>
        <span
          className={`absolute right-0 transition-transform transform rotate-90${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <img src={Minus} alt="toggler" />
        </span>
        <span>
          <img src={Minus} alt="toggler" />
        </span>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className=" text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
};

export default FAQDropdown;
