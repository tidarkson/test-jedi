import React, { useState } from "react";
import { Typography, Timeline, ConfigProvider } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const Services = () => {
  const [mode, setMode] = useState("left");
  const onChange = (e) => {
    setMode(e.target.value);
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
      <div className="md:mx-10 bg-white services p-6 md:p-10 rounded-b-3xl" id="services">
        <div className="text-center pb-10">
          <h2 className="font-semibold text-sm md:text-lg text-dark-brown">
            Our Services
          </h2>
          <h4 className="text-2xl md:text-4xl font-bold pt-5 text-slate-900">
            Empowering Excellence: Our QA Testing Solutions Story
          </h4>
        </div>
        <div className="md:px-20">
          <Timeline
            mode={mode}
            items={[
              {
                dot: <SettingOutlined spin={true} />,
                label: (
                  <h3 className="title font-bold md:text-xl text-slate-900">
                    Full-cycle Software Testing
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    We deliver efficient, full-cycle QA and software testing
                    services, ensuring you launch software without a glitch
                    faster. Get the best of both manual and automated QA for
                    reliable, real-world performance.
                  </div>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: (
                  <h3 className="title font-bold md:text-xl text-slate-900">
                    Automated Testing
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    Accelerate quality code delivery through powerful test
                    automation. Precisely engineered scripts catch issues across
                    browsers, performance, and regression testing at unmatched
                    speed. AI enhancement further boosts accuracy, adapting to
                    your software’s evolving complexity.
                  </div>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: (
                  <h3 className="title font-bold md:text-xl text-slate-900">
                    Performance testing
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    We rigorously audit speed and stability, to see the gaps and
                    recommend optimizations, so your software’s responsiveness
                    excites customers every click. Our testing ensures resources
                    scale efficiently as product usage grows over time.
                  </div>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: (
                  <h3 className="title font-bold md:text-xl text-slate-900">
                    Functional testing
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    Rigorously validating every input triggers the intended
                    output means no confusing misfires for customers. Our
                    software testing services safeguard intended utility for
                    software that meets user expectations.
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="flex justify-center align-center">
          <button className="border border-dark-brown text-dark-brown px-6 py-3 rounded-full md:mt-10 hover:bg-medium-brown transition duration-300 md:font-medium text-xs md:text-sm">
            Explore All Services
          </button>
        </div>
      </div>
    </ConfigProvider>
  );
};
export default Services;
