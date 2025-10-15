import React from "react";
import heroImage from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero bg-light-brown grid grid-cols-2 gap-10 min-h-screen items-center rounded-t-3xl">
      <div className="flex flex-col gap-5 justify-center align-center p-10">
        <div className="text-7xl font-bold tracking-wider">
          <span className="text-medium-brown">QUALITY</span> <br />
          <span className="text-slate-900">ASSURANCE</span> <br />
          <span className="text-medium-brown">EXCELLENCE</span> 
        </div>
        <p className="text-slate-900">
          Expert QA testing solutions to ensure your software meets the highest
          standards. We deliver comprehensive testing strategies that accelerate
          your product quality.
        </p>
      </div>
      <div className="flex justify-center align-center">
        <img src={heroImage} alt="" className="w-3/4" />
      </div>
    </div>
  );
};

export default Hero;
