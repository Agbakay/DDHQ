import React from "react";
import image from "../assets/Partners04.png";
import image_1 from "../assets/Partners05.png";
import image_3 from "../assets/Partners07.png";
import image_4 from "../assets/Partners08.png";
import image_5 from "../assets/Partners09.png";
import image_11 from "../assets/partners15.png";
import image_12 from "../assets/Partners16.png";
import image_13 from "../assets/Partners17.png";
import image_14 from "../assets/Partners18.png";
import image_15 from "../assets/Partners19.png";
import image_16 from "../assets/Partners20.png";
import image_17 from "../assets/Partners22.png";
import image_18 from "../assets/Partners23.png";
import image_20 from "../assets/Partners21.png";
import image_21 from "../assets/Partners24.png";
import image_22 from "../assets/Partners25.png";
import image_23 from "../assets/Partners26.png";
import image_24 from "../assets/Partners27.png";
import image_25 from "../assets/Partners31.png";
import Videoplayer from "../components/Videoplayer";
import Review from "../components/Review";

const Partners = () => {
  return (
    <div>
      {/* Hero */}

      <div className="partner-hero lg:px-[8%] px-5 py-20 relative bg-gray-50 z-10">
        <div className="partner-wrapper">
          <div className="row lg:flex justify-between items-center gap-10">
            <div className="col basis-2/5">
              <h1 className="text-3xl lg:text-5xl heading font-semibold mb-5">
                List your Business Now
              </h1>
              <p className="mb-10">
                Ready to take your business to the next level? DDHQ connects you
                with thousands of customers actively searching for services like
                yours. Whether you run a hotel, restaurant, transport service,
                or entertainment venue. We help you get discovered.
              </p>
              <a
                href="/about"
                className="py-3 px-8 bg-brandOrange text-white rounded-sm hover:bg-brandGreen transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="col mt-10 lg:mt-0 basis-2/5">
              <img src={image} alt="" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="grow lg:px-[8%] px-5 py-24">
        <div className="grow-wrapper">
          <div className="container">
            <div className="row lg:flex gap-10 justify-between items-center">
              <div className="col">
                <h1 className="text-3xl font-semibold lg:text-5xl mb-5 leading-[1.3em]">
                  Ready to Grow? Partner With Us And{" "}
                  <span className="text-gray-600 font-light">
                    Expand Your Reach...
                  </span>
                </h1>
              </div>
              <div className="col">
                <p className="mb-10">
                  Want to collaborate with Nigeria’s fastest-growing
                  entertainment and lifestyle platform? From brand partnerships
                  to sponsorship opportunities, DDHQ offers a dynamic space to
                  expand your reach.
                </p>
              </div>
            </div>
            <div className="list-section lg:flex gap-10 justify-between my-5">
              <div className="py-5 px-5 bg-[#e9edc9] rounded-md my-3">
                <img src={image_1} alt="" />
                <h1 className="text-lg font-semibold my-3">Event Organizer</h1>
                <p>Sell tickets and manage bookings with ease.</p>
              </div>
              <div className="py-5 px-5 bg-[#fefae0] rounded-md my-3">
                <img src={image_3} alt="" />
                <h1 className="text-lg font-semibold my-3">Eat & Sip</h1>
                <p>List your menus and get more orders for delivery.</p>
              </div>
              <div className="py-5 px-5 bg-[#faedcd] rounded-md my-3">
                <img src={image_4} alt="" />
                <h1 className="text-lg font-semibold my-3">
                  Transport Providers
                </h1>
                <p>Sell tickets and manage bookings with ease.</p>
              </div>
              <div className="py-5 px-5 bg-[#caf0f8] rounded-md my-3">
                <img src={image_5} alt="" />
                <h1 className="text-lg font-semibold my-3">Stay Now</h1>
                <p>Sell tickets and manage bookings with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Videoplayer />

      <div className="px-5 lg:px-[8%] py-24 bg-[#fbf6e8]">
        <div className="wrapper">
          <div className="row lg:flex gap-20 justify-between items-center">
            <div className="col basis-2/5">
              <h1 className="text-3xl lg:text-5xl font-semibold mb-5 heading">
                Grow Your Business with Detty December HQ!
              </h1>
              <p className="mb-10">
                Are you an event organiser, Short-let/Hotel provider, or other
                service provider? Get discovered and boost your sales with our
                platform!
              </p>
              <a
                href=""
                className="px-6 py-3 text-white bg-brandOrange rounded-sm hover:bg-brandGreen"
              >
                Become a Partner
              </a>
            </div>
            <div className=" basis-1/2 mt-20 lg:mt-0">
              <div className=" lg:flex  gap-10 justify-between ">
                <div className=" my-3">
                  <div className=" ">
                    <img src={image_11} alt="" />
                    <h1 className="text-lg font-semibold my-3">
                      Sell to thousands of event goers daily
                    </h1>
                    <p>
                      Get instant access to a large and engaged audience looking
                      for the best experiences.
                    </p>
                  </div>
                  <div className=" mt-10">
                    <img src={image_12} alt="" />
                    <h1 className="text-lg font-semibold my-3">
                      Easy-to-use partner dashboard
                    </h1>
                    <p>
                      Manage your listings, track orders, and update your
                      business details with a user-friendly dashboard
                    </p>
                  </div>
                </div>

                <div className=" my-4">
                  <div className=" ">
                    <img src={image_13} alt="" />
                    <h1 className="text-lg font-semibold my-3">
                      Promotions & marketing support
                    </h1>
                    <p>
                      Boost your visibility with featured listings, sponsored
                      ads, and exclusive promotions to attract more customers.
                    </p>
                  </div>
                  <div className=" mt-10">
                    <img src={image_14} alt="" />
                    <h1 className="text-lg font-semibold my-3">
                      Dedicated partner support team
                    </h1>
                    <p>
                      Get 24/7 assistance from our partner support team to
                      resolve any issues and ensure smooth operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List Business section */}
      <div className="business px-5 lg:px-[8%] py-24 ">
        <div className="business-wrapper">
          <div className="row lg:flex gap-20 justify-between items-center">
            <div className="basis-2/5">
              <h1 className="lg:text-5xl text-3xl font-semibold mb-5 text-brandOrange">
                List Your Business Now!
              </h1>
              <h3 className="font-semibold text-3xl  text-brandGreen">
                Gain Exclusive Benefits!
              </h3>
              <p className="my-5">
                Easily get started in just a few steps! Whether you’re booking
                an event, listing your business, or exploring top deals, our
                seamless process ensures a hassle-free experience. Follow this
                simple guide to make the most of Detty December HQ!
              </p>
            </div>
            <div>
              <img src={image_15} alt="" />
            </div>
          </div>
          <div className="row lg:flex gap-10">
            <div className=" bg-[#e9edc9] px-6 py-6 rounded-md my-3">
              <img src={image_16} alt="" />
              <h1 className="font-semibold text-lg my-5">
                Increased Visibility
              </h1>
              <p>
                Showcase your business to a large audience actively searching
                for experiences like yours.
              </p>
            </div>
            <div className=" bg-[#d8edff] px-6 py-6 rounded-md my-3">
              <img src={image_20} alt="" />
              <h1 className="font-semibold text-lg my-5">Targeted Audience</h1>
              <p>
                Reach customers specifically interested in nightlife, events,
                dining, shopping, accommodations, and transportation.
              </p>
            </div>
            <div className=" bg-[#d8f3dc] px-6 py-6 rounded-md my-3">
              <img src={image_17} alt="" />
              <h1 className="font-semibold text-lg my-5">
                More Bookings & Sales
              </h1>
              <p>
                Drive more traffic, reservations, and purchases through our
                platform.
              </p>
            </div>
            <div className=" bg-[#ffe3ee] px-6 py-6 rounded-md my-3">
              <img src={image_18} alt="" />
              <h1 className="font-semibold text-lg my-5">
                Easy & Seamless Management
              </h1>
              <p>
                Manage your listings, track performance, and receive bookings
                hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="demo-listing px-5  lg:px-[8%] py-24 bg-brandGreen">
        <div className="demo-wrapper">
          <div className="top-row md:flex sm:flex lg:flex gap-20 justify-between items-end">
            <div className=" basis-2/5">
              <h1 className="text-3xl lg:text-5xl text-white font-semibold ">
                See How Your Listings Will Look
              </h1>
            </div>
            <div className="lg:basis-3/5">
              <p className="text-white">
                Get a sneak peek of how your business will appear on the
                platform! With a visually appealing layout, clear descriptions,
                and high-quality images, your listings will attract the right
                audience and drive more bookings
              </p>
            </div>
          </div>

          <div className="row lg:flex gap-20 justify-between items-center pt-20">
            <div className="text-center bg-[rgb(255,240,236)] rounded-md pb-20 lg:w-[33.3%] my-3">
              <img src={image_21} alt="" width={319} className="block m-auto" />
              <h1 className="font-semibold text-lg">Event Listing</h1>
              <p className="px-20 my-5">
                Display your upcoming events with ticket pricing and event
                details.
              </p>
            </div>
            <div className="text-center bg-[#e9edc9] pt-20  lg:w-[33.3%] my-3">
              <h1 className="font-semibold text-lg">Event Listing</h1>
              <p className="px-20 my-5">
                Display your upcoming events with ticket pricing and event
                details.
              </p>{" "}
              <img src={image_22} alt="" width={319} className="block m-auto" />
            </div>
            <div className="text-center bg-[#cbfedd] lg:w-[33.3%] pb-20 my-3">
              <img src={image_23} alt="" width={319} className="block m-auto" />
              <h1 className="font-semibold text-lg">Event Listing</h1>
              <p className="px-20 ">
                Display your upcoming events with ticket pricing and event
                details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resolution */}

      <div className="resolution px-5 lg:px-[8%] py-24">
        <div className="resolution-section">
          <div className="row lg:flex gap-10 justify-between items-center">
            <div className="col basis-1/2 lg:pr-32 pb-20 lg:pb-0">
              <h1 className="heading text-3xl lg:text-5xl font-semibold mb-5">
                Read Our Dispute Resolution Policy
              </h1>
              <p className="mb-10">
                Building a successful partnership starts with trust and clarity.
                Our Dispute Resolution Policy ensures a fair process for
                handling conflicts, protecting both you and your customers.
              </p>
              <div className="list flex-col gap-10 flex mb-10 ">
                <div className="list- flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>Clear guidelines on resolving disputes</p>
                </div>
                <div className="list-list flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>Fair and transparent process for all partners</p>
                </div>
                <div className="list-list flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>Your rights and responsibilities explained</p>
                </div>
                <div className="list-list flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>Ensure a smooth partner experience</p>
                </div>
              </div>
              <button className="py-3 px-5 bg-brandOrange rounded-sm text-white hover:bg-brandGreen">
                Read Full Policy
              </button>
            </div>
            <div className="col basis-2/5">
              <img src={image_24} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Review />

      {/* Help section */}

      <div className="px-5 lg:px-[8%] py-24">
        <div className="wrapper">
          <div className="row lg:flex gap-20 justify-between items-center bg-green-100 px-20 py-10 rounded-lg">
            <div>
              <h1 className="heading text-3xl lg:text-5xl font-semibold mb-5">
                Need Help?
              </h1>
              <h3 className="text-brandGreen font-semibold text-2xl mb-5">
                Chat with Us on WhatsApp!
              </h3>
              <p className="mb-10">
                Got questions? Our support team is available to assist you
                anytime.
              </p>
              <a
                href="#"
                className="py-3 px-6 text-white bg-brandOrange rounded-sm hover:bg-brandGreen"
              >
                Chat with us on whatsApp
              </a>
            </div>
            <div>
              <img src={image_25} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
