import { useState } from "react";
import { Icon } from "@iconify/react";
import { ConfigProvider, Drawer } from "antd";
import CustomButton from "../components/CustomButton";
import { labelConfig } from "../assets/static.config";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer w-36 md:w-48"
            onClick={() => scrollToId(null)}
            role="button"
          />
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-10 justify-center items-center text-lg">
            <li className="hover:underline">
              <button type="button" onClick={() => scrollToId(null)} className="focus:outline-none">
                {labelConfig.Home}
              </button>
            </li>
            <li className="hover:underline">
              <button type="button" onClick={() => scrollToId("services")} className="focus:outline-none">
                {labelConfig.Services}
              </button>
            </li>
            <li className="hover:underline">
              <button type="button" onClick={() => scrollToId("mission")} className="focus:outline-none">
                {labelConfig.Mission}
              </button>
            </li>
            <li className="hover:underline">
              <button type="button" onClick={() => scrollToId("blog")} className="focus:outline-none">
                {labelConfig.Blog}
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <button type="button" onClick={() => scrollToId("contact")}>
            <CustomButton content={labelConfig.contactNow} />
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setOpen(true)} className="mr-2">
            <Icon icon="fluent:navigation-20-regular" width="30" style={{ color: "#A3613D" }} />
          </button>
        </div>

        <Drawer
          destroyOnHidden
          title={
            <div>
              <img src={logo} alt="logo" className="cursor-pointer w-36 md:w-48" onClick={() => { scrollToId(null); setOpen(false); }} />
            </div>
          }
          placement="top"
          open={open}
          onClose={() => setOpen(false)}
          closeIcon={<Icon icon="fluent-mdl2:cancel" width="30" style={{ color: "#A3613D" }} className="absolute right-5" />}
          size="small"
          style={{ backgroundColor: "#ffffff", height: "50vh" }}
        >
          <ul className="flex flex-col gap-5 justify-start items-start">
            <li className="hover:underline font-semibold text-slate-900">
              <button type="button" onClick={() => { scrollToId(null); setOpen(false); }} className="focus:outline-none">
                {labelConfig.Home}
              </button>
            </li>
            <li className="hover:underline font-semibold text-slate-900">
              <button type="button" onClick={() => { scrollToId("services"); setOpen(false); }} className="focus:outline-none">
                {labelConfig.Services}
              </button>
            </li>
            <li className="hover:underline font-semibold text-slate-900">
              <button type="button" onClick={() => { scrollToId("mission"); setOpen(false); }} className="focus:outline-none">
                {labelConfig.Mission}
              </button>
            </li>
            <li className="hover:underline font-semibold text-slate-900">
              <button type="button" onClick={() => { scrollToId("blog"); setOpen(false); }} className="focus:outline-none">
                {labelConfig.Blog}
              </button>
            </li>
          </ul>
        </Drawer>
      </div>
    </ConfigProvider>
  );
}
