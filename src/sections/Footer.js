import React from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="bg-light-brown text-slate-900 text-start py-10 grid grid-cols-4 gap-10 border-t border-dark-brown">
        <div className="flex gap-2 items-center justify-center">
          <div className="wheel" viewBox="0 0 24 24">
            <Icon
              icon="fluent:settings-32-light"
              width="60"
              style={{ color: "#A3613D" }}
            />
          </div>
          <div>
            <h3 className="text-dark-brown font-bold text-4xl">Test-Jedi</h3>
            <p className="text-dark-brown font-semi text-xs">
              ... Bringing The Force Of Software Quality
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-dark-brown font-semibold">Service</h3>
          <p className="hover:underline cursor-pointer">
            Full-cycle Software Testing
          </p>
          <p className="hover:underline cursor-pointer">Performance Testing</p>
          <p className="hover:underline cursor-pointer">Automated Testing</p>
          <p className="hover:underline cursor-pointer">Functional Testing</p>
          <p className="hover:underline cursor-pointer">QA Consulting</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-dark-brown font-semibold">Quick Links</h3>
          <p className="hover:underline cursor-pointer">About Us</p>
          <p className="hover:underline cursor-pointer">Services</p>
          <p className="hover:underline cursor-pointer">Case Studies</p>
          <p className="hover:underline cursor-pointer">Blog</p>
          <p className="hover:underline cursor-pointer">Contact Us</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-dark-brown font-semibold">Contact Us</h3>
          <p className="hover:underline cursor-pointer">testjedi@email.com</p>
          <p className="hover:underline cursor-pointer">+234 000 000 0000</p>
        </div>
      </div>
      <div className="p-10 bg-dark-brown text-light-brown text-lg flex justify-between">
        <h3>Copyright © 2025 Test-Jedi All rights reserved</h3>
        <div className="flex justify-center items-center gap-6">
          <p className="underline cursor-pointer">Terms Of Use</p>
          <p className="underline cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
