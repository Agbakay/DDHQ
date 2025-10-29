import React from "react";
import icon_1 from "../assets/waitlist04.png";
import icon_2 from "../assets/waitlist05.png";
import icon_3 from "../assets/waitlist06.png";
import icon_4 from "../assets/waitlist07.png";
import bkg_image from "../assets/about08.png";

const Join_Waitlist = ({ bgcolor = "bg-orange-50" }) => {
  return (
    <div className={`lg:px-[8%] px-3 py-20 ${bgcolor}`}>
      <div className="lg:flex gap-32">
        <div className="basis-1/2">
          <h1 className="lg:text-5xl text-4xl font-semibold heading mb-5">
            Why Join the Waitlist?
          </h1>
          <p>
            By joining the Detty December HQ waitlist, you’ll unlock exclusive
            perks before anyone else:
          </p>
          <div className="grid-cols-2 grid gap-10 mt-10 mb-10">
            <div className="card bg-[#e9edc9] px-5 py-4 rounded-sm">
              <img src={icon_1} alt="" />
              <h1 className="text-1xl font-semibold mt-5">Get Early Access</h1>
              <p className="my-5">
                Be the first to experience the app’s amazing features
              </p>
            </div>
            <div className="card bg-[#ffe3ee] px-5 py-4 rounded-sm">
              <img src={icon_2} alt="" />
              <h1 className="text-1xl font-semibold mt-5">
                Special perks for early adopters.
              </h1>
              <p className="my-5">Special perks for early adopters.</p>
            </div>
            <div className="card bg-[#d8edff] px-5 py-4 rounded-sm">
              <img src={icon_4} alt="" />
              <h1 className="text-1xl font-semibold mt-5">Stay Updated</h1>
              <p className="my-5">
                Receive event notifications and offers before anyone else.
              </p>
            </div>
            <div className="card bg-[#ffe3ee] px-5 py-4 rounded-sm">
              <img src={icon_3} alt="" />
              <h1 className="text-1xl font-semibold mt-5">
                Beta Testing Opportunity
              </h1>
              <p className="my-5">
                Influence the platform’s development with your feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={bkg_image} alt="" width={400} className="block m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Join_Waitlist;
