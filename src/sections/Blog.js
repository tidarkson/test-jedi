import { Card, ConfigProvider, Divider } from "antd";
import { Icon } from "@iconify/react";
import { labelConfig } from "../assets/static.config";
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
      <div className="min-h-screen py-20 md:px-10" id="blog">
        <div className="text-center pb-10 px-5 md:px-10">
          <h2 className="font-semibold text-sm md:text-lg text-slate-900">
            {labelConfig.readOurBlog}
          </h2>

          <h4 className="text-2xl md:text-4xl font-bold pt-5 text-slate-900">
            Latest <span className="text-dark-brown">News & Insights</span> from
            the Blog
          </h4>
        </div>
        <div className=" text-center mx-5 md:mx-10">
          <div className="flex flex-col lg:grid grid-cols-2 justify-around items-center gap-5">
            <Card hoverable={true} className="lg:h-full">
              <div className="grid grid-rows-2 gap-5">
                <div
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="blur-sm"
                />
                <div className="text-start">
                  <span className="py-1 px-4 bg-slate-900 rounded text-white md:my-5 text-xs md:text-sm">
                    Featured Post
                  </span>
                  <h3 className="text-lg md:text-2xl font-semibold text-slate-900 my-2 md:my-5">
                    Performance Testing Strategies for High-Traffic Applications
                  </h3>
                  <p className="text-left text-xs md:text-lg">
                    Discover proven strategies for performance testing that
                    ensure your applications can handle peak loads and deliver
                    optimal user experience.
                  </p>
                </div>
              </div>
            </Card>
            <div className="flex flex-col gap-5">
              <Card hoverable={true} className="text-start">
                <span className="py-1 px-4 bg-slate-900 rounded text-white md:my-5 text-xs md:text-sm">
                  Testing
                </span>
                <h3 className="text-lg md:text-2xl font-semibold text-slate-900 my-2 md:my-5">
                  Security Testing Best Practices for Modern Applications
                </h3>
                <p className="text-left text-xs md:text-lg">
                  Learn essential security testing methodologies to protect your
                  applications from vulnerabilities and ensure robust
                  cybersecurity.
                </p>
              </Card>
              <Card hoverable={true} className="text-start">
                <span className="py-1 px-4 bg-slate-900 rounded text-white md:my-5 text-xs md:text-sm">
                  Automation
                </span>
                <h3 className="text-lg md:text-2xl font-semibold text-slate-900 my-2 md:my-5">
                  Building Robust Test Automation Frameworks
                </h3>
                <p className="text-left text-xs md:text-lg">
                  Step-by-step guide to creating maintainable and scalable test
                  automation frameworks that accelerate your testing cycles.
                </p>
              </Card>
              <Card hoverable={true} className="text-start">
                <span className="py-1 px-4 bg-slate-900 rounded text-white md:my-5 text-xs md:text-sm">
                  Performance
                </span>
                <h3 className="text-lg md:text-2xl font-semibold text-slate-900 my-2 md:my-5">
                  Performance Testing Strategies for High-Traffic Applications
                </h3>
                <p className="text-left text-xs md:text-lg">
                  Discover proven strategies for performance testing that ensure
                  your applications can handle peak loads and deliver optimal
                  user experience.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Blog;
