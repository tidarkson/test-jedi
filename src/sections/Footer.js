import logo from "../assets/logo.svg";
import { labelConfig } from "../assets/static.config";

const Footer = () => {
  return (
    <>
      <div className="p-3 md:p-10 text-slate-900 text-start py-10 flex flex-col md:grid grid-cols-4 gap-5 md:gap-10 border-t border-medium-brown">
        <div className="">
          <img src={logo} alt="" className="cursor-pointer w-36 md:w-48" />
        </div>
        <div className="flex flex-col gap-2 px-5">
          <h3 className="text-lg text-dark-brown font-semibold">
            {labelConfig.Services}
          </h3>
          <ul>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.fullCycle}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.performanceTesting}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.automatedTesting}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.functionalTesting}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.consulting}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-5">
          <h3 className="text-lg text-dark-brown font-semibold">
            {labelConfig.quickLinks}
          </h3>
          <ul>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.aboutUs}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.Services}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.caseStudies}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.blog}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.contactUs}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-5">
          <h3 className="text-lg text-dark-brown font-semibold">Contact Us</h3>
          <ul>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.testJediEmail}
            </li>
            <li className="hover:underline cursor-pointer text-xs md:text-sm">
              {labelConfig.testJediPhone}
            </li>
          </ul>
        </div>
      </div>
      <div className=" p-5 md:p-10 gap-2 flex flex-col justify start md:flex-row md:justify-between text-xs md:text-sm">
        <h3 className="md:text-sm">{labelConfig.copyright}</h3>
        <div className="flex justify-start items-center gap-2 md:gap-6">
          <p className="underline cursor-pointer md:text-sm">
            {labelConfig.termsOfUse}
          </p>
          <p className="underline cursor-pointer md:text-sm">
            {labelConfig.privacyPolicy}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
