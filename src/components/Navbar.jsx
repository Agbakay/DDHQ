import React from "react";
import { NavLink, replace, useNavigate } from "react-router-dom";
import logo from "../assets/about01.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <header className="lg:px-[8%] py-4 z-100 w-full bg-white">
          <nav className="lg:flex gap-20 justify-between items-center ">
            <div className="logo">
              <img
                src={logo}
                alt=""
                width={130}
                className="block m-auto object-contain"
              />
            </div>
            <ul className="flex gap-10">
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li>About Us</li>
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
            <div className="flex gap-5 justify-between items-center">
              <button
                onClick={() => navigate("/partners", { replace: true })}
                className="px-5 py-3 bg-brandOrange text-white font-semibold rounded-md hover:bg-brandGreen"
              >
                Become a Partner
              </button>
              <a
                href=""
                className="px-5 py-3 bg-brandGreen rounded-md text-white font-semibold"
              >
                Vendor's Login
              </a>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
