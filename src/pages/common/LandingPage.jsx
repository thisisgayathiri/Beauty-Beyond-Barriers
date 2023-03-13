import React from "react";
import { Col, Layout, Row, Space, Image } from "antd";
import Title from "antd/es/typography/Title";
import { Content } from "antd/es/layout/layout";

const LandingPage = () => {
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Layout>
          <Content style={{ backgroundColor: "white" }}>
            <img width={"30%"} src={require("../../images/build.png")} />
            <Row justify={"center"}>
              <Title>We're still building for web!</Title>
            </Row>
            <Row justify={"center"}>
              <Title
                level={4}
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                Please switch to your mobile to access the site!
              </Title>
            </Row>
          </Content>
        </Layout>
      </Space>
    </div>
  );
};

export default LandingPage;
