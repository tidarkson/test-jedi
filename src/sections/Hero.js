import { useEffect } from "react";
import heroImage from "../assets/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { labelConfig } from "../assets/static.config";
import CustomButton from "../components/CustomButton";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const scrollToId = (id) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col lg:grid grid-cols-2 justify-center items-center my-10">
      <div className="flex flex-col justify-center items-center lg:items-start gap-5 p-6 md:p-10 lg:pl-20">
        <div
          className="text-4xl md:text-5xl xl:text-8xl font-bold tracking-wider"
          data-aos="fade-left"
        >
          <span className="text-dark-brown">{labelConfig.QUALITY}</span> <br />
          <span className="text-dark-brown">{labelConfig.ASSURANCE}</span>{" "}
          <br />
          <span className="text-dark-brown">{labelConfig.EXCELLENCE}</span>
        </div>
        <p className="text-slate-900 text-xs md:text-lg">
          {labelConfig.heroText}
        </p>
        <div>
          <button type="button" onClick={() => scrollToId("contact")}>
            <CustomButton content={labelConfig.startTesting} />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={heroImage}
          alt=""
          className="md:w-full lg:w-3/4 md:rounded-3xl"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
};

export default Hero;
