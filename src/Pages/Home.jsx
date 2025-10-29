import React from "react";
import Hero from "../components/Hero";
import Videoplayer from "../components/Videoplayer_Countdown";
import Offer from "../components/Offer";
import TimeCountdown from "../components/TimeCountdown";
import Grow from "../components/Grow";
import Join_Waitlist from "../components/Join_Waitlist";
import WaitlistComponent from "../components/WaitlistComponent";
const Home = () => {
  return (
    <div>
      <Hero />
      <Videoplayer />
      <WaitlistComponent />
      <Offer />
      <TimeCountdown />
      <Grow />
      <Join_Waitlist />
    </div>
  );
};

export default Home;
