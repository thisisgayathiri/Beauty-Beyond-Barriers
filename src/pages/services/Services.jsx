import React from "react";
import ServiceOptions from "./ServiceOptions";
import { Col, Row, Select, Space } from "antd";
import { COLORS } from "../../constants/colors";
import Location from "../../components/Location";

import Title from "antd/es/typography/Title";
import Salons from "../../components/Salons";
import Stylists from "../../components/Stylists";
import More from "../../components/common/More";
import menuItems from "../../data/menu";

import "./Services.css";
import TabMenu from "../../components/common/TabMenu";

function Services() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Row
        gutter={24}
        style={{
          margin: "10px",
          alignItems: "center",
        }}
      >
        <Col span={15}>
          <Location location="3604 Chestnut, Philadelphia" />
        </Col>
        <Col span={9}>
          <Space direction="horizontal" size={0}>
            <span style={{ marginRight: "10px" }}>For</span>
            <Select
              defaultValue="Myself"
              options={[
                { value: "Myself", label: "Myself" },
                { value: "Mom", label: "Mom" },
                { value: "Dad", label: "Dad" },
                { value: "Pet", label: "Pet" },
              ]}
            />
          </Space>
        </Col>
      </Row>

      <Title
        style={{
          padding: "0 20px 0px 20px",
          marginTop: "30px",
          textAlign: "left",
          fontWeight: 600,
          color: COLORS.SECONDARY,
        }}
        level={5}
      >
        Sandra, what are you looking for?
      </Title>

      <ServiceOptions />

      <Row
        style={{
          position: "relative",
        }}
      >
        <Col>
          <Title
            style={{
              padding: "0 20px 0px 20px",
              textAlign: "left",
              fontWeight: 600,
              color: COLORS.SECONDARY,
            }}
            level={5}
          >
            Best salons picked for you
          </Title>
        </Col>
        <Col
          style={{
            position: "absolute",
            right: "20px",
            top: "0px",
          }}
        >
          <More navTo="/salons" />
        </Col>
      </Row>

      <Salons />

      <Row
        style={{
          position: "relative",
        }}
      >
        <Col>
          <Title
            style={{
              padding: "0 20px 0px 20px",
              textAlign: "left",
              fontWeight: 600,
              color: COLORS.SECONDARY,
            }}
            level={5}
          >
            Trained stylists at your doorstep
          </Title>
        </Col>
        <Col
          style={{
            position: "absolute",
            right: "20px",
            top: "0px",
          }}
        >
          <More navTo="/stylists" />
        </Col>
      </Row>
      <Stylists />

      <TabMenu menuItems={menuItems} />
    </div>
  );
}

export default Services;
