import React from "react";
import services from "../../data/services";
import { useNavigate } from "react-router-dom";
import ServiceOptions from "./ServiceOptions";
import TitlePreviousPage from "../common/TitlePreviousPage";
import TitleHeader from "../common/TitleHeader";
import SubTitleHeader from "../common/SubTitleHeader";
import { Col, Row } from "antd";
import { COLORS } from "../../constants/colors";
import Location from "../../components/Location";

import Title from "antd/es/typography/Title";
import Salons from "../Salons";
function Services() {
  const navigate = useNavigate();

  const confirm = () => {
    navigate("/salons");
  };

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
        }}
      >
        <Col span={24}>
          <Location location="3604 Chestnut, Philadelphia" />
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

      <Row>
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
        <Col push={5}>
          <Title
            style={{
              padding: "0 0px 0px 0px",
              fontWeight: 400,
              color: COLORS.SECONDARY,
            }}
            level={5}
          >
            More
          </Title>
        </Col>
      </Row>

      <Salons />
    </div>
  );
}

export default Services;
