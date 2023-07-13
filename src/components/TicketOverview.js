import React, { useState } from "react";
import tag from "../assets/Tag.svg";

const TicketOverview = () => {
  const [adultDetails, setAdultDetails] = useState({
    quantity: 1,
    price: 17.0,
  });
  const [childDetails, setChildDetails] = useState({ quantity: 1, price: 0 });

  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold text-greyscaleG2">
          Price Details
        </h3>
        <div className="w-full text-greyscaleG3 space-y-4 my-8">
          <p className="w-full flex justify-between">
            <span>Adult ({adultDetails.quantity})</span>
            <span>${adultDetails.price}</span>
          </p>
          <p className="w-full flex justify-between">
            <span>Child ({childDetails.quantity})</span>
            <span>${childDetails.price}</span>
          </p>
          <div className="py-6 border-y-[1px]">
            <p className="flex space-x-3">
              <img src={tag} alt="tag" />
              <span className="font-semibold underline text-sacramento">
                Have a promo code?
              </span>
            </p>
          </div>
          <div className="w-full mb-10">
            <h2 className="w-full flex justify-between font-semibold text-greyscaleG2">
              <span>Total:</span>
              <span>${adultDetails.price + childDetails.price}</span>
            </h2>
            <p className="text-[12px] text-greyscaleG3 leading-6 underline">
              You will pay in USD.
            </p>
          </div>
          <div className="py-4 px-5 bg-greyscaleG8 rounded-lg">
            <p className="font-semibold text-greyscaleG2 ">Strict Cancellation</p>
            <p className="font-sm">These tickets cannot be cancelled or rescheduled.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketOverview;
