import React from "react";
import heroImage from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="md:mx-10 bg-light-brown flex flex-col lg:grid grid-cols-2 lg:gap-10 min-h-screen justify-center items-center rounded-t-3xl">
      <div className="flex flex-col gap-5 justify-center align-center p-6 md:p-10">
        <div className="text-3xl md:text-5xl xl:text-7xl font-bold tracking-wider">
          <span className="text-medium-brown">QUALITY</span> <br />
          <span className="text-slate-900">ASSURANCE</span> <br />
          <span className="text-medium-brown">EXCELLENCE</span> 
        </div>
        <p className="text-slate-900 text-xs md:text-lg">
          Expert QA testing solutions to ensure your software meets the highest
          standards. We deliver comprehensive testing strategies that accelerate
          your product quality.
        </p>
      </div>
      <div className="flex justify-center align-center">
        <img src={heroImage} alt="" className="lg:w-3/4" />
      </div>
    </div>
  );
};

export default Hero;
