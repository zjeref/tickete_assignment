import React from "react";

const ServiceContainer = ({ title, content, image }) => {
  return (
    <div className="flex items-start md:block space-x-4 md:space-y-[46px] md:px-5 md:py-4 md:border-[1px] rounded-xl md:w-[282px]">
      <img className="w-6 md:w-12" src={image} alt="service" />
      <div className="space-y-[6px]">
        <h3 className="font-semibold text-greyscaleG2">{title}</h3>
        <p className="text-greyscaleG3 text-[15px]">{content}</p>
      </div>
    </div>
  );
};

export default ServiceContainer;
