import { React, useState } from "react";
import { Icon } from "@iconify/react";
import { ConfigProvider, Drawer } from "antd";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#1E293B",
          fontFamily: "'Sora', sans-serif",
        },
      }}
    >
      <div className="navbar flex gap-10 justify-between items-center p-3 md:p-10 font-medium text-light-brown sticky top-0 bg-dark-brown z-50 backdrop-blur">
        <div className="flex gap-2 items-center justify-center">
          <div className="wheel" viewBox="0 0 24 24">
            <Icon
              icon="fluent:settings-32-light"
              width="40"
              style={{ color: "#fdf9d2" }}
            />
          </div>
          <div>
            <h3 className="text-light-brown font-bold text-xl lg:text-4xl">
              Test-Jedi
            </h3>
            <p className="slogan text-light-brown lg:text-xs">
              ... Bringing The Force Of Software Quality
            </p>
          </div>
        </div>
        <div className="hidden lg:block ">
          <ul className="flex gap-10 justify-center items-center cursor-pointer text-lg">
            <li className="hover:underline">
              <HashLink to="/" smooth>
                Home
              </HashLink>
            </li>
            <li className="hover:underline">
              <HashLink to="/#services" smooth>
                Services
              </HashLink>
            </li>
            <li className="hover:underline">
              <HashLink to="/#mission" smooth>
                Mission
              </HashLink>
            </li>
            <li className="hover:underline">
              <HashLink to="/#blog" smooth>
                Blog
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="bg-light-brown p-3 rounded-full text-dark-brown hover:bg-medium-brown md:font-medium transition duration-300 text-xs md:text-sm">
            Contact Now
          </button>
        </div>
        <div className="lg:hidden ">
          <button onClick={showLoading} className="nav-btn mr-2">
            <Icon
              icon="fluent:navigation-20-regular"
              width="30"
              style={{ color: "#fdf9d2" }}
            />
          </button>
        </div>
        <Drawer
          destroyOnHidden
          title={
            <div className="flex gap-2 items-start justify-start">
              <div className="wheel">
                <Icon
                  icon="fluent:settings-32-light"
                  width="40"
                  style={{ color: "#A3613D" }}
                />
              </div>
              <div>
                <h3 className="text-dark-brown font-bold text-xl lg:text-4xl">
                  Test-Jedi
                </h3>
                <p className="slogan text-dark-brown font-semi lg:text-xs">
                  ... Bringing The Force Of Software Quality
                </p>
              </div>
            </div>
          }
          placement="top"
          open={open}
          onClose={() => setOpen(false)}
          closeIcon={
            <Icon
              icon="codicon:eye-closed"
              width="30"
              style={{ color: "#A3613D" }}
              className="absolute right-5"
            />
          }
          size="small"
          style={{
            backgroundColor: "#D9C5B2",
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
                  Home
                </HashLink>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="hover:underline font-semibold text-slate-900"
              >
                <HashLink to="/#services" smooth>
                  Services
                </HashLink>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="hover:underline font-semibold text-slate-900"
              >
                <HashLink to="/#mission" smooth>
                  Mission
                </HashLink>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="hover:underline font-semibold text-slate-900"
              >
                <HashLink to="/#blog" smooth>
                  Blog
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
