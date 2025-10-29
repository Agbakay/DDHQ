import React from "react";
import icon_1 from "../assets/earnpoint.png";
import icon_2 from "../assets/event.png";
import icon_3 from "../assets/explore.png";
import icon_4 from "../assets/security.png";
import bkg_image from "../assets/image.png";

const Offer = () => {
  return (
    <div className="lg:p-[8%] px-3 md:px-10 py-20">
      <div className="lg:flex justify-between items-start gap-20 lg:gap-20">
        <div className="basis-1/2">
          <h2 className="mb-3 font-semibold text-brandOrange text-1xl">
            Why Detty December?
          </h2>
          <h1 className="heading lg:text-5xl text-4xl font-semibold mb-5">
            What We Offer
          </h1>
          <p>
            Our goal is to provide an easy-to-use platform where users can
            discover, book, and enjoy events and services with no stress.
          </p>
          <div className="grid-cols-2 grid gap-10 mt-10 mb-10">
            <div className="card">
              <img src={icon_1} alt="" />
              <p className="my-5">
                Earn points, unlock offers, and enjoy discounts on events and
                services.
              </p>
            </div>
            <div className="card">
              <img src={icon_2} alt="" />
              <p className="my-5">
                Join event groups, connect with like-minded people, and engage
                in live event discussions.
              </p>
            </div>
            <div className="card">
              <img src={icon_4} alt="" />
              <p className="my-5">
                Secure the best stays and transport options for a hassle-free
                experience.
              </p>
            </div>
            <div className="card">
              <img src={icon_3} alt="" />
              <p className="my-5">
                Explore top restaurants, lounges, and food vendors with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={bkg_image} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
