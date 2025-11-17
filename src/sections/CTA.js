import {
  Card,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  Carousel,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { labelConfig } from "../assets/static.config";
import CustomButton from "../components/CustomButton";
import { Icon } from "@iconify/react";

const contentStyle = {
  height: "350px",
  color: "#151240",
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
            colorBgContainer: "#ffffff",
            activeBorderColor: "#D9C5B2",
            hoverBorderColor: "#D9C5B2",
          },

          Select: {
            colorBgContainer: "#ffffff",
            activeBorderColor: "#D9C5B2",
            hoverBorderColor: "#D9C5B2",
          },
        },
      }}
    >
      <div className="px-5 md:px-20 py-20 bg-medium-brown flex flex-col flex-col-reverse lg:grid grid-cols-2 md:gap-10">
        <div className="text-center">
          <div className="flex justify-center gap-2 items-center">
            <h2 className="text-2xl md:text-4xl my-14 font-bold text-slate-900">
              {labelConfig.ready}
            </h2>
            <Icon
              icon="lets-icons:message-duotone"
              width="40"
              style={{ color: "#A3613D" }}
            />
          </div>

          <Card
            style={{
              marginTop: 20,
            }}
          >
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12} style={{ padding: "0px 8px" }} md={12} xs={24}>
                  <Form.Item
                    name={labelConfig.fullName}
                    label="Full Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Full Name",
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
                    label={labelConfig.email}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Email",
                      },
                    ]}
                  >
                    <Input
                      className="w-full p-2 rounded"
                      placeholder={labelConfig.email}
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ padding: "0px 8px" }} md={12} xs={24}>
                  <Form.Item
                    name="companyName"
                    label={labelConfig.companyName}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Company Name",
                      },
                    ]}
                  >
                    <Input
                      className="w-full p-2 rounded"
                      placeholder={labelConfig.companyName}
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ padding: "0px 8px" }} md={12} xs={24}>
                  <Form.Item
                    name="service"
                    label={labelConfig.serviceInterested}
                  >
                    <Select style={{ height: 40 }} />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ padding: "0px 8px" }}>
                  <Form.Item name="message" label={labelConfig.message}>
                    <TextArea
                      className="w-full p-2 rounded"
                      placeholder={labelConfig.howCanWeHelpYou}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <CustomButton content={labelConfig.sendMessage} />
              </Row>
            </Form>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-2 items-center">
            <Icon
              icon="line-md:phone-call-twotone-loop"
              width="36"
              style={{ color: "#A3613D" }}
            />
            <h2 className="text-2xl md:text-4xl my-14 font-bold text-slate-900">
              {labelConfig.whatOurClientsSay}
            </h2>
          </div>

          <Card
            style={{
              marginTop: 20,
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
                  className="flex flex-col text-sm md:text-lg justify-center items-center px-5 md:px-10"
                >
                  {labelConfig.michealGreyText}
                  <br />
                  <span className="text-lg mt-4 text-dark-brown">
                    - {labelConfig.michealGrey}
                  </span>
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="flex flex-col text-sm md:text-lg justify-center items-center px-5 md:px-10"
                >
                  {labelConfig.tijaniText} <br />
                  <span className="text-lg mt-4 text-dark-brown">
                    - {labelConfig.tijani}
                  </span>
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="flex flex-col text-sm md:text-lg justify-center items-center px-5 md:px-10"
                >
                  {labelConfig.gwenText} <br />
                  <span className="text-lg mt-4 text-dark-brown">
                    - {labelConfig.gwen}
                  </span>
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="flex flex-col text-sm md:text-lg justify-center items-center px-5 md:px-10"
                >
                  {labelConfig.tingText} <br />
                  <span className="text-lg mt-4 text-dark-brown">
                    - {labelConfig.ting}
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
