import { useState } from "react";
import { Typography, Timeline, ConfigProvider } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { labelConfig } from "../assets/static.config";
import CustomButton from "../components/CustomButton";

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
          colorPrimary: "#151240",
          fontFamily: "'Sora', sans-serif",
        },
      }}
    >
      <div
        className="md:mx-10 bg-white services p-6 md:p-10 rounded-b-3xl"
        id="services"
      >
        <div className="text-center pb-10">
          <h2 className="font-semibold text-sm md:text-lg text-slate-900">
            {labelConfig.ourServices}
          </h2>
          <h4 className="text-2xl md:text-4xl font-bold pt-5 text-slate-900">
            Empowering <span className="text-dark-brown">Excellence</span>: Our
            QA Testing Solutions Story
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
                    {labelConfig.fullCycle}
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    {labelConfig.fullCycleText}
                  </div>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: (
                  <h3 className="title font-bold md:text-xl text-slate-900">
                    {labelConfig.automatedTesting}
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    {labelConfig.automatedTestingText}
                  </div>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: (
                  <h3 className="title font-bold md:text-xl text-slate-900">
                    {labelConfig.performanceTesting}
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    {labelConfig.performanceTestingText}
                  </div>
                ),
              },
              {
                dot: <SettingOutlined spin={true} />,
                label: (
                  <h3 className="title font-bold md:text-xl text-slate-900">
                    {labelConfig.functionalTesting}
                  </h3>
                ),
                children: (
                  <div className="text-xs md:text-sm">
                    {labelConfig.functionalTestingText}
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="flex justify-center align-center">
          <CustomButton content={labelConfig.exploreAllServices} />
        </div>
      </div>
    </ConfigProvider>
  );
};
export default Services;
