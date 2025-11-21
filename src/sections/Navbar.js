import { React, useState } from "react";
import { Icon } from "@iconify/react";
import { ConfigProvider, Drawer } from "antd";
import CustomButton from "../components/CustomButton";
import { HashLink } from "react-router-hash-link";
import { labelConfig } from "../assets/static.config";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1E293B",
          fontFamily: "'Sora', sans-serif",
        },
      }}
    >
      <div className="navbar flex gap-10 justify-between items-center p-3 md:p-10 font-medium sticky top-0 z-30 backdrop-blur">
        <div className="flex gap-2 items-center justify-center">
          <img src={logo} alt="" className="cursor-pointer w-36 md:w-48" />
        </div>
        <div className="hidden lg:block ">
          <ul className="flex gap-10 justify-center items-center cursor-pointer text-lg">
            <li className="hover:underline">
              <HashLink to="/" smooth>
                {labelConfig.Home}
              </HashLink>
            </li>
            <li className="hover:underline">
              <HashLink to="/#services" smooth>
                {labelConfig.Services}
              </HashLink>
            </li>
            <li className="hover:underline">
              <HashLink to="/#mission" smooth>
                {labelConfig.Mission}
              </HashLink>
            </li>
            <li className="hover:underline">
              <HashLink to="/#blog" smooth>
                {labelConfig.Blog}
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <HashLink to="#cta" smooth>
            <CustomButton content={labelConfig.contactNow} />{" "}
          </HashLink>
        </div>
        <div className="lg:hidden ">
          <button onClick={showLoading} className="mr-2">
            <Icon
              icon="fluent:navigation-20-regular"
              width="30"
              style={{ color: "#A3613D" }}
            />
          </button>
        </div>
        <Drawer
          destroyOnHidden
          title={
            <div className="">
              <img src={logo} alt="" className="cursor-pointer w-36 md:w-48" />
            </div>
          }
          placement="top"
          open={open}
          onClose={() => setOpen(false)}
          closeIcon={
            <Icon
              icon="codicon:eye-closed"
              width="36"
              style={{ color: "#A3613D" }}
              className="absolute right-5"
            />
          }
          size="small"
          style={{
            backgroundColor: "#ffffff",
            height: "50vh",
          }}
        >
          <div className="">
            <ul className="flex flex-col gap-5 justify-start items-start cursor-pointer">
              <li
                onClick={() => setOpen(false)}
                className="hover:underline font-semibold text-slate-900"
              >
                <HashLink to="/" smooth>
                  {labelConfig.Home}
                </HashLink>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="hover:underline font-semibold text-slate-900"
              >
                <HashLink to="/#services" smooth>
                  {labelConfig.Services}
                </HashLink>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="hover:underline font-semibold text-slate-900"
              >
                <HashLink to="/#mission" smooth>
                  {labelConfig.Mission}
                </HashLink>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="hover:underline font-semibold text-slate-900"
              >
                <HashLink to="/#blog" smooth>
                  {labelConfig.Blog}
                </HashLink>
              </li>
            </ul>
          </div>
        </Drawer>
      </div>
    </ConfigProvider>
  );
};

export default Navbar;
