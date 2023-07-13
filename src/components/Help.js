import React from "react";
import ChartCircle from "../assets/ChatsCircle.svg";

const Help = () => {
  return (
    <div className="space-y-4 px-6 py-8 bg-pumpkin rounded-lg">
      <div className="flex items-center">
        <div className="w-[252px]">
          <h4 className="font-semibold text-pumpkin10">Need Help?</h4>
          <p className="text-pumpkin10">We're here to help, 24*7</p>
        </div>
        <img src={ChartCircle} alt="chart" />
      </div>
      <button className="px-6 h-[43px] rounded-xl font-semibold text-pumpkin10 border-[1px] border-pumpkin10">
        Chat with us
      </button>
    </div>
  );
};

export default Help;
