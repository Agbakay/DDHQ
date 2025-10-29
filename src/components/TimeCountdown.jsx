import React from "react";
import Countdown from "./Countdown";
import bkg_image from "../assets/about03.png";
import Subscribe from "./Subscribe";

const TimeCountdown = () => {
  return (
    <div className="py-32 lg:px-[8%] px-3 justify-between bg-green-100 ">
      <div className="lg:flex gap-20 ">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold heading mb-5">
            The Wait is Almost Over!
          </h1>
          <h2 className="mb-5 text-brandGreen font-semibold text-3xl">
            Something big is coming!
          </h2>
          <p className="mb-10">
            Stay ahead of the vibe with early access to Detty December HQ.
            Events, rides, fashion, food, and more, right at your fingertips all
            year round!
          </p>

          <Countdown targetDate="2025-10-21" />
          <Subscribe />
        </div>
        <div>
          <img src={bkg_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TimeCountdown;
