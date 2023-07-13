import React, { useState } from "react";
import venueImg from "../assets/venue.png";
import Ticket from "../assets/Ticket.svg";
import Calender from "../assets/CalendarBlank.svg";
import Clock from "../assets/Clock.svg";

const Venue = () => {
  const [venue, setVenue] = useState(
    "Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House"
  );
  const [date, setDate] = useState("Thu, 13th Jul, 2023");
  const [time, setTime] = useState("20:00");

  return (
    <div className="border-b-[1px] ">
      <img className="w-[380px] mb-3" src={venueImg} alt="venue" />
      <div>
        <p className="text-lg font-semibold text-greyscaleG2">
          Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House
        </p>
      </div>
      <div className="my-6 space-y-3">
        <p className="flex space-x-4 items-start">
          <img src={Ticket} alt="Ticket" />
          <span className="font-semibold text-greyscaleG2">{venue}</span>
        </p>
        <p className="flex space-x-4  items-start">
          <img src={Calender} alt="Ticket" />
          <span className="font-semibold text-greyscaleG2">{date}</span>
        </p>
        <p className="flex space-x-4  items-start">
          <img src={Clock} alt="Ticket" />
          <span className="font-semibold text-greyscaleG2">{time}</span>
        </p>
      </div>
    </div>
  );
};

export default Venue;
