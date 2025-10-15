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

          // Alias Token
          // colorBgContainer: "#f6ffed",
        },
      }}
    >
      <div className="bg-white services p-10 rounded-b-3xl">
        <div className="text-center pb-10">
          <h2 className="font-semibold text-lg text-dark-brown">Our Services</h2>
          <h4 className="text-4xl font-bold pt-5 text-slate-900">
            Empowering Excellence: Our QA Testing Solutions Story
          </h4>
        </div>
        <div className="pr-20 pl-20">
          <Timeline
            mode={mode}
            items={[
              {
                dot: <SettingOutlined spin={true} />,
                label: <Title className="title" level={4}>Full-cycle Software Testing</Title>,
                children: (
                  <Text>
                    We deliver efficient, full-cycle QA and software testing
                    services, ensuring you launch software without a glitch
                    faster. Get the best of both manual and automated QA for
                    reliable, real-world performance.
                  </Text>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: <Title className="title" level={4}>Automated Testing</Title>,
                children: (
                  <Text>
                    Accelerate quality code delivery through powerful test
                    automation. Precisely engineered scripts catch issues across
                    browsers, performance, and regression testing at unmatched
                    speed. AI enhancement further boosts accuracy, adapting to
                    your software’s evolving complexity.
                  </Text>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: <Title className="title" level={4}>Performance testing</Title>,
                children: (
                  <Text>
                    We rigorously audit speed and stability, to see the gaps and
                    recommend optimizations, so your software’s responsiveness
                    excites customers every click. Our testing ensures resources
                    scale efficiently as product usage grows over time.
                  </Text>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: <Title className="title" level={4}>Functional testing</Title>,
                children: (
                  <Text>
                    Rigorously validating every input triggers the intended
                    output means no confusing misfires for customers. Our
                    software testing services safeguard intended utility for
                    software that meets user expectations.
                  </Text>
                ),
              },
            ]}
          />
        </div>

        <div className="flex justify-center align-center">
          <button className="border border-dark-brown text-dark-brown px-6 py-3 rounded-full mt-10 hover:bg-medium-brown transition duration-300 font-medium">
            Explore All Services
          </button>
        </div>
      </div>
    </ConfigProvider>
  );
};
export default Services;
