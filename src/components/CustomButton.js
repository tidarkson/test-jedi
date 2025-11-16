import { Button } from "antd";
import React from "react";

const CustomButton = (props) => {
  return (
    <button className="font-semibold border border-2 border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-light-brown px-6 py-3 rounded-full transition duration-300 text-xs md:text-sm">
      {props.content} 
    </button>
  );
};

export default CustomButton;
