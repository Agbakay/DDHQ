import React from "react";
import Countdown from "./Countdown";
import Video from "./Video";

const Videoplayer = () => {
  return (
    <div className="px-[2%] lg:px-[1%] py-[100px] w-full">
      <div className="text-center">
        <h1 className="text-3xl font-semibold md:text-5xl mb-5   text-center sm:leading-[60px] heading">
          Watch The Demo And <br />
          See DDHQ in Action!
        </h1>
        <p className="mb-10 text-center">
          Watch the video to see how we bring unforgettable experiences to your
          fingertips!
        </p>

        <div className="relative lg:px-[8%] ">
          <div className=" h-[600px] bg-amber-100 flex items-center justify-center video rounded-2xl ">
            <div className="w-[100px] h-[100px]  justify-center items-center flex rounded-full bg-brandGreen">
              <Video youtubeId="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
