import React from "react";
import background from "../assets/about03.png";
const Hero = () => {
  return (
    <div className="px-[8%] lg:flex  items-center hero lg:h-[70vh]">
      <div className="order-0 pt-20 sm:pt-0 md:pt-0 basis-1/2">
        <h1 className="text-white text-4xl sm:text-6xl md:text-5xl font-semibold mb-10 sm:leading-[75px] leading-[45px]">
          Nigeria's Number 1 Hub For{" "}
          <span className="light">Nightlife, Events, and Services</span>
        </h1>
        <p className="mb-10 text-white">
          Discover events, book rides, chauffeur rides, earn rewards, and
          more—all in one place!
        </p>
        <div className="gap-3 flex ">
          <button className="px-4 py-3 bg-transparent border-1 border-white text-white rounded-[5px] hover:bg-[#cbfedd] hover:border-[#cbfedd] hover:text-black ">
            Join Waitlist
          </button>
          <button className="px-4 py-3 bg-brandOrange rounded-[5px] hover:bg-[#cbfedd] hover:text-black text-white   ">
            Become a Partner now!
          </button>
        </div>
      </div>
      <div className="w-full basis-1/2">
        <img
          src={background}
          alt=""
          className="object-fit object-cover block m-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
