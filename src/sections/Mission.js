import { Card, ConfigProvider } from "antd";
import Title from "antd/es/typography/Title";
import { Icon } from "@iconify/react";

const Mission = () => {
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
      <div className="bg-white mt-10 relative">
        <div className="wheel absolute bottom-5 right-10" viewBox="0 0 24 24">
          <Icon
                icon="fluent:settings-32-light"
                width="180"
                style={{ color: "#151240" }}
              />
        </div>
        <div className="text-center pb-10 pt-10">
          <h2 className="font-semibold text-lg text-dark-brown">
            Why Choose Us?
          </h2>
          <div className="flex justify-between items-center pl-10 pr-10">
            <h4 className="text-4xl font-bold pt-5 text-slate-900">
              Elevate Your Software Quality with Our QA Expertise
            </h4>
            <button className="border border-dark-brown text-dark-brown px-6 py-3 rounded-full mt-10 hover:bg-medium-brown transition duration-300 font-medium">
              See what makes us unique
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-around items-center gap-5 pb-10 px-10">
          <Card hoverable={true}>
            <div>
              <Icon
                icon="la:globe-asia"
                width="32"
                style={{ color: "#151240" }}
              />
            </div>
            <Title level={4} style={{color: "#151240", paddingTop: 10}}>Proven in the real world</Title>
            <p>
              With over a decade of experience testing everything from global
              platforms to fast-moving product teams, we know how to balance
              speed, structure, and depth without slowing you down.
            </p>
          </Card>
          <Card hoverable={true}>
            <div>
              <Icon
                icon="hugeicons:atom-01"
                width="32"
                style={{ color: "#151240" }}
              />
            </div>
            <Title level={4} style={{color: "#151240", paddingTop: 10}}>Flexible as you grow</Title>
            <p>
              Dedicated teams when you need consistency. Crowdsourced bursts
              when you need speed. Outsourced or nearshore options when you want
              more lift. Our model adapts as your needs evolve.
            </p>
          </Card>
          <Card hoverable={true}>
            <div>
              <Icon
                icon="bi:transparency"
                width="32"
                style={{ color: "#151240" }}
              />
            </div>
            <Title level={4} style={{color: "#151240", paddingTop: 10}}>Transparency at every step</Title>
            <p>
              Track test execution, review issues, audit performance, and see
              who’s doing the work. Everything’s documented, accessible, and
              built to keep you in the loop
            </p> <br/>
          </Card>
          <Card hoverable={true}>
            <div>
              <Icon
                icon="carbon:security-services"
                width="32"
                style={{ color: "#151240" }}
              />
            </div>
            <Title level={4} style={{color: "#151240", paddingTop: 10}}>Security you can count on</Title>
            <p>
              We’re certified and built for enterprise scale. From data handling
              to tester management, we bring structure and security to every
              engagement.
            </p>
          </Card>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Mission;
