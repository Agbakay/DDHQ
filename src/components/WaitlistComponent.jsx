import React from "react";
import image from "../assets/demo05.webp";

const WaitlistComponent = ({ bkg = "bg-transparent" }) => {
  return (
    <div className={`lg:px-[8%] w-full pb-10 px-3 ${bkg}`}>
      <div className=" md:flex gap-32 lg:flex justify-between items-start ">
        <div className="basis-1/2 mt-20">
          <h1 className="heading text-3xl sm:text-5xl font-semibold mb-10">
            Your Ultimate Lifestyle & Events Companion!
          </h1>
          <h4 className="text-2xl font-semibold text-brandGreen mb-5">
            A Lifestyle Experience for Every Season!
          </h4>
          <p className="mb-10">
            Detty December HQ is more than just an events platform. it’s your
            all-in-one lifestyle app designed to connect you with the best
            experiences, services, and partners all year round.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-3 bg-transparent border-1 border-black text-black rounded-[5px] hover:bg-[#cbfedd] hover:border-[#cbfedd] hover:text-black ">
              Join Waitlist
            </button>
            <button className="px-4 py-3 bg-brandOrange rounded-[5px] hover:bg-[#cbfedd] hover:text-black text-white   ">
              Become a Partner
            </button>
          </div>
        </div>
        <div className="basis-1/2 mt-10 sm:mt-0  ">
          <img
            src={image}
            alt=""
            className=" w-[400px] h-fit object-contain block m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WaitlistComponent;
