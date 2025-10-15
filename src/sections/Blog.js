import { Card, ConfigProvider, Divider } from "antd";
import { Icon } from "@iconify/react";
import Title from "antd/es/typography/Title";
import background from "../assets/hero-img.png";

const Blog = () => {
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
      <div className="min-h-screen bg-light-brown py-20">
        <div className="text-center pb-20">
          <h2 className="font-semibold text-lg text-dark-brown">
            Read Our Blog
          </h2>

          <h2 className="text-4xl font-bold pt-5 text-slate-900">
            Latest News & Articles from the Blog
          </h2>
        </div>
        <div className=" text-center mx-10">
          <div className="grid grid-cols-2 justify-around items-center gap-5">
            <Card hoverable={true} className="h-full">
              <div className="grid grid-rows-2 gap-5">
                <div
                  style={{
                    backgroundImage: `url(${background})`,
                    height: "32vh",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="blur-sm"
                />
                <div className="text-start">
                  <span className="py-2 px-5 bg-dark-brown rounded-full text-light-brown my-5">
                    Featured Post
                  </span>
                  <Title level={3} style={{ color: "#151240", marginTop: 20 }}>
                    Performance Testing Strategies for High-Traffic Applications
                  </Title>
                  <p className="text-left text-lg">
                    Discover proven strategies for performance testing that
                    ensure your applications can handle peak loads and deliver
                    optimal user experience.
                  </p>
                  <button className="text-xl hover:underline text-dark-brown border-none mt-5">
                  Read more
                </button>
                </div>
              </div>
            </Card>
            <div className="flex flex-col gap-5">
              <Card hoverable={true} className="text-start">
                <span className="py-2 px-5 bg-dark-brown rounded-full text-light-brown my-5">
                  Testing
                </span>
                <Title level={3} style={{ color: "#151240", marginTop: 20 }}>
                  Security Testing Best Practices for Modern Applications
                </Title>
                <p>
                  Learn essential security testing methodologies to protect your
                  applications from vulnerabilities and ensure robust
                  cybersecurity.
                </p>
                <button className="text-lg hover:underline text-dark-brown border-none mt-5">
                  Read more
                </button>
              </Card>
              <Card hoverable={true} className="text-start">
                <span className="py-2 px-5 bg-dark-brown rounded-full text-light-brown my-5">
                  Automation
                </span>
                <Title level={3} style={{ color: "#151240", marginTop: 20 }}>
                  Building Robust Test Automation Frameworks
                </Title>
                <p>
                  Step-by-step guide to creating maintainable and scalable test
                  automation frameworks that accelerate your testing cycles.
                </p>
                <button className="text-lg hover:underline text-dark-brown border-none mt-5">
                  Read more
                </button>
              </Card>
              <Card hoverable={true} className="text-start">
                <span className="py-2 px-5 bg-dark-brown rounded-full text-light-brown my-5">
                  Performance
                </span>
                <Title level={3} style={{ color: "#151240", marginTop: 20 }}>
                  Performance Testing Strategies for High-Traffic Applications
                </Title>
                <p>
                  Discover proven strategies for performance testing that ensure
                  your applications can handle peak loads and deliver optimal
                  user experience.
                </p>
                <button className="text-lg hover:underline text-dark-brown border-none mt-5">
                  Read more
                </button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Blog;
