import React from "react";

const ServiceContainer = ({ title, content, image }) => {
  return (
    <div className="space-y-[46px] px-5 py-4 border-[1px] rounded-xl w-[282px]">
      <img className="" src={image} alt="service" />
      <div className="space-y-[6px]">
        <h3 className="font-semibold text-greyscaleG2">{title}</h3>
        <p className="text-greyscaleG3 text-[15px]">{content}</p>
      </div>
    </div>
  );
};

export default ServiceContainer;
