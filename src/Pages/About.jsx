import React from "react";
import Join_Waitlist from "../components/Join_Waitlist";
import image from "../assets/about03.png";
import image_1 from "../assets/about06.png";
import image_2 from "../assets/about07.webp";
import image_3 from "../assets/about08.png";
import image_4 from "../assets/about18.png";
import image_5 from "../assets/about23.png";
import image_6 from "../assets/about24.png";
import image_7 from "../assets/about25.png";
import image_8 from "../assets/about26.png";
import image_9 from "../assets/about27.png";
import image_10 from "../assets/about28.png";
import image_11 from "../assets/about29.png";
import booking from "../assets/about09.png";
import transport from "../assets/about10.png";
import connect from "../assets/about11.png";
import premium from "../assets/about12.png";
import point from "../assets/about13.png";
import WaitlistComponent from "../components/WaitlistComponent";
import TimeCountdown from "../components/TimeCountdown";
import Review from "../components/Review";
import Videoplayer from "../components/Videoplayer";

const About = () => {
  return (
    <div className="">
      <div className="bg-green-100 lg:px-[8%] px-4 lg:flex items-center justify-between pt-10 lg:mt-0">
        <div className=" ">
          <h1 className="lg:text-5xl text-4xl font-semibold heading mb-5">
            Your Ultimate Lifestyle & Events Companion!
          </h1>
          <h4 className="text-green-800 text-lg font-semibold mb-3">
            A Lifestyle Experience for Every Season!
          </h4>
          <p>
            DDHQ is more than just an app, it’s a lifestyle movement. We bring
            together everything you need for an effortless experience:
          </p>
          <div className="gap-3 flex mt-5 ">
            <button className="px-4 py-3 bg-white border-1 border-white  rounded-[5px] hover:bg-green-600 hover:border-[#cbfedd] hover:text-white ">
              Join Waitlist
            </button>
            <button className="px-4 py-3 bg-brandOrange rounded-[5px] hover:bg-green-800 hover:text-white text-white   ">
              Become a Partner now!
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="lg:px-[15%] px-4 py-32 relative">
        <div className="h-0.5 lg:block hidden w-[300px]  left-[40%] right-0 top-[50%] bg-black absolute rotate-90"></div>
        <div className="lg:flex justify-between items-center gap-10">
          <div className=" lg:w-[600px]">
            <h1 className="heading text-3xl lg:text-5xl mb-4 font-semibold">
              Our Mission
            </h1>
            <p>
              At DDHQ, we believe unforgettable moments are built through
              community, connection, and creativity. Our mission is to power
              Nigeria’s most exciting experiences by connecting vibrant vendors
              with adventurous customers — making every celebration, every
              journey, and every discovery effortless, authentic, and
              unforgettable. We champion local businesses, nurture trust, and
              create a space where everyone can belong, thrive, and shine.
            </p>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-[600px]">
            <h1 className="heading text-3xl lg:text-5xl mb-4 font-semibold">
              Our Vision
            </h1>
            <p>
              To become the heart of Nigeria’s experience economy — a trusted
              community where users find the best events, accommodations, food,
              transportation, and unforgettable experiences, and where vendors
              grow and prosper. We envision a future where DDHQ is the ultimate
              go-to lifestyle app for both locals, diasporans and tourists and
              the gateway to Nigeria’s most vibrant events and experiences,
              empowering people to celebrate life effortlessly while creating
              value for vendors, partners and local economies.
            </p>
          </div>
        </div>
      </div>

      {/* Detty Passport */}
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
                    engagements, then redeem them for discounts, event tickets,
                    and special deals.
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
      {/* Achieve section */}
      <div className="achieve-section py-32 lg:px-[8%] px-5 bg-gray-100">
        <div className="achieve">
          <div className="row lg:flex justify-between gap-10 items-start">
            <div className="col basis-1/2 lg:py-32">
              <h1 className=" mb-15 text-3xl lg:text-5xl font-semibold">
                What We Strive To Achieve...
              </h1>
              {/* list */}
              <div className="list  flex-col gap-10 flex ">
                <div className="list- flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>
                    Becoming Africa’s leading all-in-one event and lifestyle
                    platform.
                  </p>
                </div>
                <div className="list-list flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>
                    Revolutionizing the way people discover and engage with
                    entertainment.
                  </p>
                </div>
                <div className="list-list flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>
                    Creating lasting memories by making every experience
                    hassle-free and enjoyable
                  </p>
                </div>
                <div className="list-list flex justify-start gap-10 items-start">
                  <i className="fa-solid fa-map-pin text-brandOrange text-2xl"></i>
                  <p>
                    Bridging the gap between service providers and users with
                    smart technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col basis-2/5 pt-20 lg:pt-0">
              <img src={image_2} alt="" />
            </div>
          </div>
        </div>
      </div>

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
                Get ready for an all-in-one experience that takes the stress out
                of event planning and lifestyle activities.
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
                    Unlock Premium VIP & Exclusives. Access experiences at your
                    favorite venues.
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

      {/* Waitlist */}
      <Join_Waitlist />
      <TimeCountdown />

      {/* Resolution */}

      <div className="resolution px-5 lg:px-[8%] py-24">
        <div className="resolution-section">
          <div className="row lg:flex gap-10 justify-between items-center">
            <div className="col basis lg:pr-32 pb-20 lg:pb-0">
              <h1 className="heading text-3xl lg:text-5xl font-semibold mb-5">
                Read Our Dispute Resolution Policy
              </h1>
              <p className="mb-10">
                Building a successful partnership starts with trust and clarity.
                Our Dispute Resolution Policy ensures a fair process for
                handling conflicts, protecting both you and your customers.
              </p>
              <div className="list  flex-col gap-10 flex mb-10 ">
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
            <div className="col">
              <img src={image_4} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Review Component */}
      <Review />
      <Videoplayer />

      {/* Gallery */}

      <div className="gallery px-5 lg:px-[8%] lg:py-24 pb-24">
        <div className="gallery-wrapper">
          {/*Top text  */}
          <div className="gallery-text lg:flex gap-10 justify-between items-end mb-10">
            <div className="col-left basis-1/2">
              <h1 className="text-3xl font-semibold heading mb-5 lg:text-5xl">
                Gallery
              </h1>
              <h3 className="text-2xl mb-5">
                Re-live the Moments, Experience the Vibes!
              </h3>
            </div>
            <div className="col-right basis-2/5">
              <p>
                Step into the world of Detty December HQ through our vibrant
                gallery! From electrifying concerts to exclusive VIP parties,
                cultural festivals, and nightlife adventures; see what makes us
                the ultimate hub for events and entertainment.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 grid-cols-1">
            <div className="grid-item">
              <img src={image_5} alt="" />
            </div>
            <div className="grid-item">
              <img src={image_6} alt="" />
            </div>{" "}
            <div className="grid-item">
              <img src={image_7} alt="" />
            </div>{" "}
            <div className="grid-item lg:col-span-2">
              <img src={image_8} alt="" />
            </div>{" "}
            <div className="grid-item">
              <img src={image_9} alt="" />
            </div>{" "}
            <div className="grid-item">
              <img src={image_10} alt="" />
            </div>{" "}
            <div className="grid-item lg:col-span-2">
              <img src={image_11} alt="" />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
