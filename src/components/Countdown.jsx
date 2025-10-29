import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  // const calculateTimeLeft = () => {
  //   const difference = +new Date(targetDate) - +new Date();
  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   } else {
  //     timeLeft = { expired: true };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [targetDate]);

  // if (timeLeft.expired) {
  //   return <p className="text-red-600 font-bold">Time’s up!</p>;
  // }

  return (
    <div className="flex sm:gap-20 md:gap-20 text-center items-center justify-center text-xl gap-10">
      {/* <div>
        <span className="block text-3xl sm:text-7xl font-bold mb-5">
          {timeLeft.days}
        </span>
        <span>Days</span>
      </div>
      <div>
        <span className="block text-3xl font-bold sm:text-7xl mb-5">
          {timeLeft.hours}
        </span>
        <span>Hours</span>
      </div>
      <div>
        <span className="block text-3xl font-bold sm:text-7xl mb-5">
          {timeLeft.minutes}
        </span>
        <span>Minutes</span>
      </div>
      <div>
        <span className="block text-3xl font-bold sm:text-7xl mb-5">
          {timeLeft.seconds}
        </span>
        <span>Seconds</span>
      </div> */}

      <div className="text-center font-bold text-7xl uppercase animate-pulse text-brandGreen fill-transparent">
        launchng Soon
      </div>
    </div>
  );
};

export default Countdown;
