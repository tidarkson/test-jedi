import {
  Card,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  Carousel,
  Divider,
} from "antd";
import TextArea from "antd/es/input/TextArea";

const contentStyle = {
  height: "350px",
  color: "#D9C5B2",
  background: "#364d79",
};

const CTA = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#151240",
          fontFamily: "'Sora', sans-serif",
          controlOutline: "transparent",

          Form: {
            labelColor: "#151240",
          },

          Input: {
            colorBgContainer: "#fdf9d2",
            activeBorderColor: "#fdf9d2",
            hoverBorderColor: "#fdf9d2",
          },

          Select: {
            colorBgContainer: "#fdf9d2",
            activeBorderColor: "#fdf9d2",
            hoverBorderColor: "#fdf9d2",
          },
        },
      }}
    >
      <div className="bg-slate-900 p-5 md:p-10 flex flex-col flex-col-reverse lg:grid grid-cols-2 md:gap-10">
        <div className="pb-10 text-center">
          <h2 className="text-2xl md:text-4xl my-10 font-bold text-medium-brown">
            Ready to start testing? <br /> Get in touch with us.
          </h2>

          <Card
            style={{
              backgroundColor: "#364d79",
              marginTop: 20,
              borderColor: "#364d79",
            }}
          >
            <Form layout="vertical">
              <Row
                gutter={16}
              >
                <Col span={12} style={{ padding: "0px 8px" }} md={12} xs={24}>
                  <Form.Item
                    name="fullName"
                    label="Full Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input
                      className="w-full p-2 rounded"
                      placeholder="Full Name"
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ padding: "0px 8px" }} md={12} xs={24}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email name",
                      },
                    ]}
                  >
                    <Input className="w-full p-2 rounded" placeholder="email" />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ padding: "0px 8px" }} md={12} xs={24}>
                  <Form.Item
                    name="companyName"
                    label="Company Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Company Name",
                      },
                    ]}
                  >
                    <Input
                      className="w-full p-2 rounded"
                      placeholder="Company Name"
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ padding: "0px 8px" }} md={12} xs={24}>
                  <Form.Item name="service" label="Service Interested">
                    <Select style={{ height: 40 }} />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ padding: "0px 8px" }}>
                  <Form.Item name="message" label="Message">
                    <TextArea
                      className="w-full p-2 rounded"
                      placeholder="How can we help you?"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <button className="bg-slate-900 text-medium-brown px-6 py-3 rounded-full hover:bg-medium-brown hover:border hover:border-slate-900 hover:text-slate-900 transition duration-300 font-medium text-xs md:text-sm">
                  Send now
                </button>
              </Row>
            </Form>
          </Card>
        </div>

        <div className="pb-10 text-center">
          <h2 className="text-2xl md:text-4xl my-10 font-bold text-medium-brown">
            What Clients Say About <br /> Test-Jedi
          </h2>
          <Card
            style={{
              backgroundColor: "#364d79",
              marginTop: 20,
              borderColor: "#364d79",
            }}
          >
            <Carousel
              autoplay
              autoplaySpeed={5000}
              dots={true}
              dotsClass="slick-dots custom-dots"
            >
              <div>
                <h3
                  style={contentStyle}
                  className="flex flex-col text-sm md:text-xl justify-center items-center px-5 md:px-10"
                >
                  "Working with Test-Jedi was a good one. They were very
                  particular about time management we had to make extra efforts
                  to keep up. We have and will still refer companies to them"{" "}
                  <br />
                  <span className="text-lg mt-2 text-slate-900">
                    - Sarah W, Product Manager
                  </span>
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="flex flex-col text-sm md:text-xl justify-center items-center px-5 md:px-10"
                >
                  "Their team is very responsive and flexible. They are willing
                  to work with our internal team to ensure that the project is
                  completed on time and within budget." <br />
                  <span className="text-lg mt-2 text-slate-900">
                    - John D, CTO
                  </span>
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="flex flex-col text-sm md:text-xl justify-center items-center px-5 md:px-10"
                >
                  "Test-Jedi provided us with a team of highly skilled testers
                  who were able to quickly identify and report bugs in our
                  software. Their attention to detail and thoroughness was
                  impressive." <br />
                  <span className="text-lg mt-2 text-slate-900">
                    - Emily R, QA Lead
                  </span>
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="flex flex-col text-sm md:text-xl justify-center items-center px-5 md:px-10"
                >
                  "The team at Test-Jedi is very knowledgeable and experienced
                  in software testing. They were able to provide us with
                  valuable insights and recommendations on how to improve our
                  testing processes." <br />
                  <span className="text-lg mt-2 text-slate-900">
                    - Michael S, Head of Development
                  </span>
                </h3>
              </div>
            </Carousel>
          </Card>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default CTA;
