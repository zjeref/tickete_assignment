import React, { useState } from "react";
import Shield from "../assets/ShieldCheckered.png";
import radiobutton from "../assets/RadioButton.svg";

const PaymentConfirm = () => {
  const [totalAmount, setTotalAmount] = useState(18.0);

  return (
    <div className="space-y-10">
      <div className="mt-8 space-y-[6px]">
        <h2 className="text-2xl font-semibold text-greyscaleG2">
          Total: ${totalAmount}
        </h2>
        <p className="text-[12px] text-greyscaleG3 leading-6 underline">
          You will pay in USD.
        </p>
      </div>
      <div>
        <p className="text-greyscaleG3 text-xs">
          With payment, you agree to the general{" "}
          <span className="text-bluecaroyola">
            terms and conditions of Tickete & the activity provider.
          </span>
        </p>
        <button className="bg-black  flex items-center px-5 py-[13px] rounded-xl space-x-2 my-5">
          <span className="text-greyscaleG9 font-semibold">
            Confirm and pay
          </span>
          <img src={Shield} alt="dsda" />
        </button>
        <p className="flex space-x-3 p-4 bg-greyscaleG8 rounded-lg">
          <img className="w-4 " src={radiobutton} alt="" />
          <span className="text-xs font-semibold">
            Recieve travel tips, suggestions and offers in city by email
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentConfirm;
