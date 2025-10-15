import React from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="navbar flex gap-10 justify-between items-center p-6 font-medium text-light-brown sticky top-0 bg-dark-brown z-50 backdrop-blur">
      <div className="flex gap-2 items-center justify-center">
        <div className="wheel" viewBox="0 0 24 24">
          <Icon
            icon="fluent:settings-32-light"
            width="60"
            style={{ color: "#fdf9d2" }}
          />
        </div>
        <div>
          <h3 className="text-light-brown font-bold text-4xl">Test-Jedi</h3>
          <p className="text-light-brown font-semi text-xs">
            ... Bringing The Force Of Software Quality
          </p>
        </div>
      </div>
      <div>
        <ul className="flex gap-10 justify-center items-center cursor-pointer text-lg">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">Services</li>
          <li className="hover:underline">Mission</li>
          <li className="hover:underline">Blog</li>
        </ul>
      </div>
      <div>
        <button className="bg-light-brown p-3 rounded-full text-dark-brown hover:bg-medium-brown">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
