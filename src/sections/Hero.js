import React from "react";
import heroImage from "../assets/hero-img.png";
import { Icon } from "@iconify/react";
import { labelConfig } from "../assets/static.config";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:grid grid-cols-2 min-h-screen justify-center items-center">
      <div className="flex flex-col justify-center gap-5 p-6 md:p-10 lg:pl-20">
        <div className="text-4xl md:text-5xl xl:text-8xl font-bold tracking-wider">
          <span className="text-dark-brown">{labelConfig.QUALITY}</span> <br />
          <span className="text-dark-brown">{labelConfig.ASSURANCE}</span>{" "}
          <br />
          <span className="text-dark-brown">{labelConfig.EXCELLENCE}</span>
        </div>
        <p className="text-slate-900 text-xs md:text-lg">
          {labelConfig.heroText}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={heroImage} alt="" className="md:w-full lg:w-3/4 md:rounded-3xl" />
      </div>
    </div>
  );
};

export default Hero;
