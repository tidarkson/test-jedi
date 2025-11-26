import { Button } from "antd";
import React from "react";

const scrollToId = (id) => {
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

const CustomButton = (props) => {
  return (
    <button
      className="font-semibold border border-2 border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-light-brown px-6 py-3 rounded-full transition duration-300 text-xs md:text-sm"
      onClick={() => scrollToId(null)}
    >
      {props.content}
    </button>
  );
};

export default CustomButton;
