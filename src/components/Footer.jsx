import React from "react";
import logo from "../assets/DDHQ-logo.png";
import { NavLink } from "react-router-dom";
import app_store from "../assets/demo12.png";
import app_store_apple from "../assets/demo13.png";

const Footer = () => {
  return (
    <div className="bg-brandGreen  px-[]">
      <div className="md:flex flex-wrap gap-10 justify-between py-20 px-[8%]">
        <div className="pb-5">
          <img src={logo} alt="" width={80} />
          <p className="text-white pt-10 w-2xs">
            Your Ultimate Event & Lifestyle Companion, All Year Round
          </p>
        </div>
        <div className="pb-5">
          <h1 className="text-white font-semibold text-2xl pb-5">QuickLinks</h1>
          <ul className="text-white flex flex-col gap-3 mt-5">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/partners"}>
              <li>Partners</li>
            </NavLink>
            <NavLink to={"/waitlist"}>
              <li>Waitlist</li>
            </NavLink>
            <NavLink to={"/app-demo"}>
              <li>App Demo</li>
            </NavLink>
          </ul>
        </div>
        <div className="pb-5">
          <h1 className="text-white font-semibold text-2xl pb-3 ">Resourses</h1>
          <ul className="text-white flex flex-col gap-3 mt-5">
            <NavLink to={"/contact"}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to={"/Privacy"}>
              <li>Privacy Policy</li>
            </NavLink>
            <NavLink to={"/terms_&_condition"}>
              <li>Terms & COnditions</li>
            </NavLink>
            <NavLink to={"/dispute_resolution_policy"}>
              <li>Dispute Resolution Policy</li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li>Blog</li>
            </NavLink>
          </ul>
        </div>
        <div className="pb-5">
          <h1 className="text-white font-semibold text-2xl pb-3">Contact</h1>
          <ul className="text-white mt-5">
            <NavLink to={"/"}>
              <li>info@dettydecember.com</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex-col gap-10">
          <img src={app_store} alt="" className="pb-3" />
          <img src={app_store_apple} alt="" />
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="bg-green-200 m-w-full text-center px-10 py-10">
        <h1 className="md:w-2x1 text-center">
          DDHQ is a mobile platform operated by DDHQ Technologies LLC, a
          U.S.-based company, under exclusive License from HQ1 Technologies
          Limited, the registered trademark owner of DDHQ in Nigeria
        </h1>
        <div className="copy-right font-bold pt-5">
          Copyright © 2025 DDHQ Technologie LLC.
        </div>
      </div>
    </div>
  );
};

export default Footer;
