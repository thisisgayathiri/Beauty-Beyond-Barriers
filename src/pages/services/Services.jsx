import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceOptions from "./ServiceOptions";
import { Affix, Col, Row, Tabs } from "antd";
import { COLORS } from "../../constants/colors";
import Location from "../../components/Location";

import Title from "antd/es/typography/Title";
import Salons from "../../components/Salons";
import Stylists from "../../components/Stylists";
import More from "../../components/common/More";
import { AppstoreTwoTone, HeartTwoTone, RocketTwoTone, ScheduleTwoTone } from "@ant-design/icons";
import menuItems from "../../data/menu";
import './Services.css'

function Services() {
  const navigate = useNavigate();

  const confirm = () => {
    navigate("/salons");
  };

  const getIcon = (icon) => {
    if(_.isEqual(icon, 'explore'))
      return <AppstoreTwoTone twoToneColor={COLORS.PRIMARY} />
    else if(_.isEqual(icon, 'bookings'))
      return <ScheduleTwoTone twoToneColor={COLORS.PRIMARY} />
    else if(_.isEqual(icon, 'account'))
      return <HeartTwoTone twoToneColor={COLORS.PRIMARY}/>
  }

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
          <More navTo={"/"} />
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
          <More navTo={"/"} />
        </Col>
      </Row>
      <Stylists />

      <Affix offsetBottom={0}>
        <Tabs
        style={{
          backgroundColor: 'white',
          padding: '0 40px',
        }}
          defaultActiveKey="2"
          items={menuItems.map(({ name, icon, id}) => {
            return {
              label: (
                <span style={{
                  backgroundColor: 'white'
                }}>
                  {getIcon(icon)}
                  {name}
                </span>
              ),
              key: id,
            };
          })}
        />
      </Affix>
    </div>
  );
}

export default Services;
