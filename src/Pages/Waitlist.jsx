import React from "react";
import Subscribe from "../components/Subscribe";
import Countdown from "../components/Countdown";
import Join_Waitlist from "../components/Join_Waitlist";
import WaitlistComponent from "../components/WaitlistComponent";
import TimeCountdown from "../components/TimeCountdown";
import image from "../assets/waitlist09.png";
import image_1 from "../assets/waitlist10.png";
import booking from "../assets/about09.png";
import transport from "../assets/about10.png";
import connect from "../assets/about11.png";
import premium from "../assets/about12.png";
import point from "../assets/about13.png";
import image_3 from "../assets/about08.png";

const Waitlist = () => {
  return (
    <div>
      <div className="">
        <div className="hero lg:px-[8%] h-[600px] m-auto text-center flex items-center justify-center ">
          <div className="hero-wrapper">
            <h3 className="text-2xl text-green-200">Join The Waitlist</h3>
            <h1 className="text-3xl lg:text-5xl font-semibold text-white lg:w-[900px] lg:leading-[60px]">
              Be Among the First 500 to Experience Detty December HQ!
            </h1>
            <div className="ml-10">
              <Subscribe
                buttonColor="bg-orange-500"
                hoverColor="bg-green-300"
              />
            </div>
            <p className="mt-10 text-white">
              Join the waitlist today and be the first to access VIP perks,
              exclusive discounts, and seamless bookings.
            </p>
          </div>
        </div>

        <div className="countdown  max-w-full flex justify-center items-center">
          <div className="py-10 px-30 shadow-2xl bg-white w-fit mt-[-60px] rounded-2xl">
            <Countdown targetDate="2025-10-10" />
          </div>
        </div>

        {/*  */}

        <Join_Waitlist bgcolor="#fff" />

        {/*  */}

        <TimeCountdown />

        {/*  */}

        <div className="py-28 lg:px-[20%] px-5">
          <div className="lg:flex justify-between items-center gap-28">
            <div className="basis-1/2 ">
              <h1 className="text-3xl lg:text-5xl font-semibold lg:leading-[55px] mb-5">
                Join the Detty December HQ Community
              </h1>
              <p className="mb-10">
                Stay connected, stay updated, and be part of the ultimate event
                experience! Follow us on social media, engage with fellow
                fun-seekers, and never miss an update on the hottest events,
                exclusive deals, and special rewards.
              </p>
              <div className="socials mb-10 flex gap-5 ">
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-facebook   text-brandGreen hover:text-white "></i>
                </span>
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-instagram text-brandGreen hover:text-white  "></i>
                </span>
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-x-twitter  text-brandGreen hover:text-white  "></i>
                </span>
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-tiktok  text-brandGreen hover:text-white "></i>
                </span>
              </div>
            </div>
            <div>
              <img src={image} alt="" width={500} />
            </div>
          </div>
        </div>

        {/*Detty Passport  */}

        <div className="detty-section lg:px-[8%] px-5 bg-[#15803d] text-white">
          <div className="detty-wrapper">
            <div className="row lg:flex justify-between items-center gap-10">
              <div className="col basis-2/5 pt-20 lg:pt-0">
                <h1 className=" mb-5 text-white text-3xl lg:text-5xl font-semibold">
                  Introducing The Detty Passport
                </h1>
                <h3 className="font-semibold text-3xl mb-5 text-green-200">
                  Your All-Access Pass to Exclusive Perks!
                </h3>
                <p className="mb-10">
                  Your golden pass to Nigeria’s most sought-after events,
                  nightlife, and lifestyle perks with Detty Passport:
                </p>
                {/* list */}
                <div className="list text-white flex-col gap-10 flex ">
                  <div className="list- flex justify-start gap-10 items-start">
                    <i className="fa-solid fa-map-pin text-2xl"></i>
                    <p>
                      Accumulate points through purchases, bookings, and
                      engagements, then redeem them for discounts, event
                      tickets, and special deals.
                    </p>
                  </div>
                  <div className="list-list flex justify-start gap-10 items-start">
                    <i className="fa-solid fa-map-pin text-2xl"></i>
                    <p>
                      Get VIP entry to premium events, early-bird ticket sales,
                      and members-only experiences.
                    </p>
                  </div>
                  <div className="list-list flex justify-start gap-10 items-start">
                    <i className="fa-solid fa-map-pin text-2xl"></i>
                    <p>
                      Use your Detty Passport to make quick and secure payments
                      for events, transport, accommodation, and more.
                    </p>
                  </div>
                  <div className="list-list flex justify-start gap-10 items-start">
                    <i className="fa-solid fa-map-pin text-2xl"></i>
                    <p>
                      Keep tabs on your earned perks, cashback, and ongoing
                      promotions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-right">
                <img src={image_1} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="what-to-expect lg:px-[8%] px-5 py-24">
          <div className="wte">
            <div className="row lg:flex justify-between gap-10 items-center">
              <div className="col ">
                <img src={image_3} width={600} alt="" />
              </div>
              <div className="col basis-1/2">
                <h1 className="text-3xl lg:text-5xl font-semibold heading mb-5">
                  What To Expect From Detty December HQ
                </h1>
                <p className="mb-10">
                  Get ready for an all-in-one experience that takes the stress
                  out of event planning and lifestyle activities.
                </p>

                <div className="icon-list lg:grid-cols-2 grid gap-10">
                  <div className="icon-block flex gap-5  justify-start items-center">
                    <img src={booking} alt="" />
                    <p>Find, book, and attend events effortlessly.</p>
                  </div>
                  <div className="icon-block flex gap-5 items-center justtify-start">
                    <img src={premium} alt="" />
                    <p>
                      Transport & Ride Booking – Get to your events with ease.
                    </p>
                  </div>
                  <div className="icon-block flex gap-5 items-center justtify-start">
                    <img src={point} alt="" />
                    <p>
                      Unlock Premium VIP & Exclusives. Access experiences at
                      your favorite venues.
                    </p>
                  </div>
                  <div className="icon-block flex gap-5 items-center justtify-start">
                    <img src={transport} alt="" />
                    <p>Connect, network, and engage with fellow event-goers.</p>
                  </div>
                  <div className="icon-block flex gap-5 items-center justtify-start">
                    <img src={connect} alt="" />
                    <p>Earn loyalty points and redeem exclusive rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaitlistComponent />

        {/*  */}
      </div>
    </div>
  );
};

export default Waitlist;
