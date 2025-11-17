import { Card, ConfigProvider } from "antd";
import Title from "antd/es/typography/Title";
import { Icon } from "@iconify/react";
import { labelConfig } from "../assets/static.config";
import CustomButton from "../components/CustomButton";

const Mission = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1E293B",
          fontFamily: "'Sora', sans-serif",
        },
      }}
    >
      <div
        className="bg-white mt-10 relative border-t border-medium-brown py-10"
        id="mission"
      >
        <div className="text-center py-10">
          <h2 className="font-semibold text-sm md:text-lg text-slate-900">
            {labelConfig.chooseUs}
          </h2>
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center px-5 md:px-10">
            <h4 className="text-2xl md:text-4xl font-bold pt-5 ml-5 text-slate-900">
              Elevate Your Software{" "}
              <span className="text-dark-brown">Quality</span> with Our QA
              Expertise
            </h4>
            <CustomButton content={labelConfig.mission} />
          </div>
        </div>
        <div className="flex flex-col lg:grid grid-cols-3 justify-around items-center gap-5 pb-10 px-5 md:mx-8">
          <Card hoverable={true}>
            <div className="">
              <Icon
                icon="la:globe-asia"
                width="40"
                style={{ color: "#A3613D" }}
                className="wheel"
              />
            </div>
            <Title level={4} style={{ color: "#151240", paddingTop: 10 }}>
              {labelConfig.proven}
            </Title>
            <p className="text-xs md:text-sm">{labelConfig.provenText}</p>
          </Card>
          <Card hoverable={true}>
            <div>
              <Icon
                icon="hugeicons:atom-01"
                width="40"
                style={{ color: "#A3613D" }}
              />
            </div>
            <Title level={4} style={{ color: "#151240", paddingTop: 10 }}>
              {labelConfig.flexible}
            </Title>
            <p className="text-xs md:text-sm">{labelConfig.flexibleText}</p>
          </Card>
          <Card hoverable={true}>
            <div>
              <Icon
                icon="bi:transparency"
                width="40"
                style={{ color: "#A3613D" }}
              />
            </div>
            <Title level={4} style={{ color: "#151240", paddingTop: 10 }}>
              {labelConfig.transparency}
            </Title>
            <p className="text-xs md:text-sm">{labelConfig.transparencyText}</p>
          </Card>
          <Card hoverable={true}>
            <div>
              <Icon
                icon="line-md:security"
                width="40"
                style={{ color: "#A3613D" }}
              />
            </div>
            <Title level={4} style={{ color: "#151240", paddingTop: 10 }}>
              {labelConfig.security}
            </Title>
            <p className="text-xs md:text-sm">{labelConfig.securityText}</p>
          </Card>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Mission;
