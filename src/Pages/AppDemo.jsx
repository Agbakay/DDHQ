import React from "react";
import image from "../assets/demo04.png";
import image1 from "../assets/demo05.webp";
import image2 from "../assets/about06.png";
import image3 from "../assets/demo07.png";
import image4 from "../assets/demo08.png";
import image5 from "../assets/demo09.png";
import image6 from "../assets/demo10.png";

const AppDemo = () => {
  return (
    <>
      <div>
        {/* Hero */}
        <div>
          <div className="lg:flex justify-between items-center gap-20 hero lg:px-[18%] px-5 py-32">
            <div>
              <h1 className="text-white font-semibold text-3xl lg:text-5xl mb-5">
                Explore DDHQ Features
              </h1>
              <h3 className="text-green-200 mb-3 text-2xl font-semibold">
                Your All-in-One Event Companion
              </h3>
              <p className="text-white mb-10">
                Your all-in-one app for discovering events, booking tickets,
                securing accommodations, and unlocking exclusive rewards!
              </p>
              <div className="btn flex gap-10">
                <a
                  href="/waitlist"
                  className="px-6 py-3 rounded-sm border-1 border-white text-white hover:bg-green-500 hover:border-green-500"
                >
                  Join Waitlist
                </a>
                <a
                  href="/partners"
                  className="px-6 py-3 rounded-sm border-1 border-white text-white bg-brandOrange hover:bg-green-500 hover:border-green-500"
                >
                  Become a Partner
                </a>
              </div>
            </div>
            <div>
              <img src={image} alt="" className="block m-auto object-contain" />
            </div>
          </div>
        </div>

        {/*  */}

        <div className="">
          <div className="row lg:flex gap-20 justify-between items-start lg:px-[18%] py-28">
            <div className="col">
              <img
                src={image1}
                alt=""
                className="block m-auto object-contain w-[300px]"
              />
            </div>
            <div className="col basis-1/2 pt-10">
              <h1 className="font-semibold text-3xl lg:text-4xl heading mb-3">
                Effortless Event Booking
              </h1>
              <h3 className="text-2xl mb-5 text-gray-500">
                Discover, Book & Manage Events in One Place
              </h3>
              <p className="mb-5">
                Get instant access to Nigeria’s biggest concerts, festivals, and
                exclusive nightlife events—all in one place.
              </p>

              <div className="list">
                <ul className="pt-5 flex-col flex gap-5">
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Browse events by category (Concerts, Festivals, Nightlife,
                    Conferences, and more)
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    View event details, ticket prices, and location, and also
                    join event community
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Choose ticket type (Gold, VIP, Platinum.) depending on your
                    choice.
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Get instant QR-coded tickets for easy entry
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="row lg:flex gap-20 justify-between items-start lg:px-[18%] py-28">
            <div className="col order-2">
              <img
                src={image1}
                alt=""
                className="block m-auto object-contain w-[300px]"
              />
            </div>
            <div className="col basis-1/2 pt-10">
              <h1 className="font-semibold text-3xl lg:text-4xl heading mb-3">
                Accommodation & Travel
              </h1>
              <h3 className="text-2xl mb-5 text-gray-500">
                Book Hotels & Secure Transport for a Seamless Experience
              </h3>
              <p className="mb-5">
                Find the best hotels, short-lets, and premium stays tailored to
                your needs
              </p>

              <div className="list">
                <ul className="pt-5 flex-col flex gap-5">
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Hotel Booking: Choose from budget-friendly stays to luxury
                    suites
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Ride Booking: Get a ride to and from your event(s)
                    hassle-free
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* 3 */}
          <div className="row lg:flex gap-20 justify-between items-start lg:px-[18%] py-28">
            <div className="col">
              <img
                src={image1}
                alt=""
                className="block m-auto object-contain w-[300px]"
              />
            </div>
            <div className="col basis-1/2 pt-10">
              <h1 className="font-semibold text-3xl lg:text-4xl heading mb-3">
                Effortless Transportation Booking
              </h1>
              <h3 className="text-2xl mb-5 text-gray-500">
                Seamless Rides, Anytime, Anywhere
              </h3>
              <p className="mb-5">
                Need a ride? Whether it’s private chauffeurs or group travel,
                DDHQ makes mobility effortless.
              </p>

              <div className="list">
                <ul className="pt-5 flex-col flex gap-5">
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Select from a range of transport options, tailored to your
                    needs.
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    See ride estimates upfront, pay with your wallet, and enjoy
                    a stress-free journey.
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Track your ride in real time and stay updated with live
                    location sharing for added safety and convenience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="row lg:flex gap-20 justify-between items-start lg:px-[18%] py-28">
            <div className="col order-2">
              <img
                src={image1}
                alt=""
                className="block m-auto object-contain w-[300px]"
              />
            </div>
            <div className="col basis-1/2 pt-10">
              <h1 className="font-semibold text-3xl lg:text-4xl heading mb-3">
                Food & Beverage
              </h1>
              <h3 className="text-2xl mb-5 text-gray-500">
                Order from Top Restaurants & Get Delivery to Your Location
              </h3>
              <p className="mb-5">
                Dine, drink, and celebrate at Nigeria’s top-rated restaurants,
                bars, and clubs—with priority bookings and VIP deals.
              </p>

              <div className="list">
                <ul className="pt-5 flex-col flex gap-5">
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Browse partner restaurants and bars near your location
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    View event details, ticket prices, and location, and also
                    join event community
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Order your meals and get it delivered to your location for
                    ultimate convenience
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="row lg:flex gap-20 justify-between items-start lg:px-[18%] py-28">
            <div className="col">
              <img
                src={image1}
                alt=""
                className="block m-auto object-contain w-[300px]"
              />
            </div>
            <div className="col basis-1/2 pt-10">
              <h1 className="font-semibold text-3xl lg:text-4xl heading mb-3">
                Social Hangouts & Meetups
              </h1>
              <h3 className="text-2xl mb-5 text-gray-500">
                Connect, Network & Party Together!
              </h3>
              <p className="mb-5">
                Discover hidden gems, social lounges, and curated meet-up spots
                where you can connect, network, and unwind.
              </p>

              <div className="list">
                <ul className="pt-5 flex-col flex gap-5">
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Join event-specific chat groups
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Discover social meetups & after-parties
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Find friends attending the same event
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="row lg:flex gap-20 justify-between items-start lg:px-[18%] py-28">
            <div className="col order-2">
              <img
                src={image1}
                alt=""
                className="block m-auto object-contain w-[300px]"
              />
            </div>
            <div className="col basis-1/2 pt-10">
              <h1 className="font-semibold text-3xl lg:text-4xl heading mb-3">
                Help & Support
              </h1>
              <h3 className="text-2xl mb-5 text-gray-500">
                Get In Touch – We’re Here for You!
              </h3>
              <p className="mb-5">
                Need assistance? Our 24/7 support team ensures your experience
                is smooth and stress-free. Get help with:
              </p>

              <div className="list">
                <ul className="pt-5 flex-col flex gap-5">
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Event ticketing & reservations
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Business partnerships & listings
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    General inquiries & technical support
                  </li>
                  <li>
                    <i className="fa-solid fa-map-pin text-brandOrange mr-3 text-lg"></i>
                    Contact us anytime—we’re here to help.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*Detty Passport  */}

        <div className="detty-section lg:px-[8%] px-5 bg-[#15803d] text-white hero">
          <div className="detty-wrapper ">
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
                <img src={image2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Why choose Detty December section */}

        <div className="bg-orange-100">
          <div className="wrapper lg:px-[10%] px-5 py-28">
            <div className="row lg:flex gap-20 justify-between items-center ">
              <div className="col basis-1/2">
                <h3 className="text-brandOrange text-2xl font-semibold mb-10">
                  Why Detty Decemeber?
                </h3>
                <h1 className="text-3xl lg:text-5xl font-semibold mb-10">
                  Why Choose Detty December HQ?
                </h1>
                <p className="mb-10">
                  With all these features, Detty December HQ is more than just
                  an event app—it’s a lifestyle companion that makes attending
                  events easier, fun, and stress-free.
                </p>
                <div className="btn flex gap-10">
                  <a
                    href="/waitlist"
                    className="px-6 py-3 rounded-sm border-1 border-white bg-white text-black hover:bg-green-500 hover:border-green-800"
                  >
                    Join Waitlist
                  </a>
                  <a
                    href="/partners"
                    className="px-6 py-3 rounded-sm border-1 border-white text-white bg-brandOrange hover:bg-green-500 hover:border-green-500"
                  >
                    Become a Partner
                  </a>
                </div>
              </div>
              <div className="col grid grid-cols-2 basis-3/5 gap-20">
                <div className="px-3 py-4">
                  <img src={image3} alt="" />
                  <h3 className="py-4 text-lg font-semibold">
                    One app for everything
                  </h3>
                  <p>Events, tickets, hotels, food, rides & more</p>
                </div>
                <div className="px-3 py-4">
                  <img src={image4} alt="" />
                  <h3 className="py-4 text-lg font-semibold">Save Money</h3>
                  <p>Save money with Detty Passport rewards</p>
                </div>
                <div className="px-3 py-4">
                  <img src={image5} alt="" />
                  <h3 className="py-4 text-lg font-semibold">
                    Real-time updates
                  </h3>
                  <p>Enjoy seamless event experiences with real-time updates</p>
                </div>
                <div className="px-3 py-4">
                  <img src={image6} alt="" />
                  <h3 className="py-4 text-lg font-semibold">
                    Dedicated partner support team
                  </h3>
                  <p>
                    Get 24/7 assistance from our partner support team to resolve
                    any issues and ensure smooth operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDemo;
