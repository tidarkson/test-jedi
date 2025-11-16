import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="p-3 md:p-10 text-slate-900 text-start py-10 flex flex-col md:grid grid-cols-4 gap-5 md:gap-10 border-t border-medium-brown">
        <div className="">
          <img src={logo} alt="" className="cursor-pointer w-48" />
        </div>
        <div className="flex flex-col gap-2 px-5">
          <h3 className="text-lg text-dark-brown font-semibold">Service</h3>
          <ul>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Full-cycle Software Testing
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Performance Testing
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Automated Testing
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Functional Testing
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              QA Consulting
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-5">
          <h3 className="text-lg text-dark-brown font-semibold">Quick Links</h3>
          <ul>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              About Us
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Services
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Case Studies
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Blog
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-5">
          <h3 className="text-lg text-dark-brown font-semibold">Contact Us</h3>
          <ul>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              testjedi@email.com
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              +234 000 000 0000
            </li>
          </ul>
        </div>
      </div>
      <div className=" p-5 md:p-10 gap-2 flex flex-col justify start md:flex-row md:justify-between text-xs md:text-sm">
        <h3 className="md:text-sm">
          Copyright © 2025 Test-Jedi All rights reserved
        </h3>
        <div className="flex justify-start items-center gap-2 md:gap-6">
          <p className="underline cursor-pointer md:text-sm">Terms Of Use</p>
          <p className="underline cursor-pointer md:text-sm">Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
