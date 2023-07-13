import React from "react";
import ServiceContainer from "./miscellaneous/ServiceContainer";
import circleTick from "../assets/CircleWavyCheck.svg";
import flexible from "../assets/flexible.svg";
import Staryellow from "../assets/Staryellow.svg";
import ChatService from "../assets/ChatService.svg";

const Services = () => {
  return (
    <div className="w-full my-16 ">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-greyscaleG2">
          The Tickete promise
        </h2>
      </div>
      <div className="w-full md:flex md:flex-row md:justify-between md:space-x-6 space-y-6 md:space-y-0">
        <ServiceContainer
          image={circleTick}
          title={"Official"}
          content={"Authorised reseller to top attraction"}
        />
        <ServiceContainer
          image={flexible}
          title={"Stay flexible and spontaneous"}
          content={
            "Flexible cancellation, multiple payment options & last minute availability"
          }
        />
        <ServiceContainer
          image={Staryellow}
          title={"Travel made delightful"}
          content={"Instant, secure & easy booking. Everytime. Everywhere."}
        />
        <ServiceContainer
          image={ChatService}
          title={"We've got your back"}
          content={"Change of plans? Got queries? We're here to help, 24*7"}
        />
      </div>
    </div>
  );
};

export default Services;
