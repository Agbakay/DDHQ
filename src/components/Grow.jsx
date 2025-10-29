import React from "react";
import icon_1 from "../assets/partners15.png";
import icon_2 from "../assets/partners16.png";
import icon_3 from "../assets/partners17.png";
import icon_4 from "../assets/partners18.png";

const Grow = () => {
  return (
    <div className="lg:px-[8%] px-3 py-26">
      <div className="lg:flex gap-20">
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-semibold heading mb-5">
            Grow Your Business with Detty December HQ!
          </h1>
          <p className="mb-5">
            Are you an event organizer, fashion vendor, or service provider? Get
            discovered and boost your sales with our platform!
          </p>
          <button className="px-4 py-3 bg-brandOrange rounded-[5px] hover:bg-[#cbfedd] hover:text-black text-white   ">
            Become a Partner
          </button>
        </div>
        <div>
          <div className="grid-cols-2 grid gap-10 mt-10 mb-10">
            <div className="card">
              <img src={icon_1} alt="" />
              <h1 className="text-1xl font-semibold mt-5">
                Sell to thousands of event goers daily
              </h1>
              <p className="my-5">
                Get instant access to a large and engaged audience looking for
                the best experiences.
              </p>
            </div>
            <div className="card">
              <img src={icon_2} alt="" />
              <h1 className="text-1xl font-semibold mt-5">
                Easy-to-use vendor dashboard
              </h1>
              <p className="my-5">
                Manage your listings, track orders, and update your business
                details with a user-friendly dashboard
              </p>
            </div>
            <div className="card">
              <img src={icon_4} alt="" />
              <h1 className="text-1xl font-semibold mt-5">
                Promotions & marketing support
              </h1>
              <p className="my-5">
                Boost your visibility with featured listings, sponsored ads, and
                exclusive promotions to attract more customers.
              </p>
            </div>
            <div className="card">
              <img src={icon_3} alt="" />
              <h1 className="text-1xl font-semibold mt-5">
                Dedicated vendor support team
              </h1>
              <p className="my-5">
                Get 24/7 assistance from our vendor support team to resolve any
                issues and ensure smooth operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
