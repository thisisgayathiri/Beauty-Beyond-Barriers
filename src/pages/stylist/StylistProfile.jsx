import {
  HeartOutlined,
  LeftOutlined,
  MessageOutlined,
  PhoneOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { Col, Row, Card, Badge, Tabs } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import Title from "antd/es/typography/Title";
import "./StylistProfile.css";
import TabMenu from "../../components/common/TabMenu";
import stylistProfileMenu from "../../data/stylistProfileMenu";
import { COLORS } from "../../constants/colors";

const StylistProfile = () => {
  return (
    <>
      <Row
        gutter={24}
        style={{
          margin: "10px",
          alignItems: "center",
          padding: "20px 20px 5px 20px",
        }}
      >
        <Col span={2}>
          <NavLink to={"/stylists"}>
            <LeftOutlined />
          </NavLink>
        </Col>
        <Col offset={19}>
          <HeartOutlined
            style={{
              fontSize: "20px",
            }}
          />
        </Col>
      </Row>

      <Card
        className="stylist-profile-card"
        actions={[
          <PhoneOutlined
            style={{
              fontSize: "20px",
              rotate: "105deg",
            }}
          />,
          <>
            <Badge dot={true} status={"success"}>
              <MessageOutlined
                style={{
                  fontSize: "20px",
                }}
              />
              ,
            </Badge>
          </>,
        ]}
        cover={
          <div
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "5%",
              overflow: "hidden",
              backgroundColor: "black",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ height: "100%" }}
              alt="stylist"
              src={"/images/stylists/1.jpg"}
            />
          </div>
        }
      >
        <div className="card-text-wrapper">
          <Row
            style={{
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Title
              level={5}
              style={{
                marginTop: "10px",
              }}
            >
              Sowmya Seshadri
            </Title>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <StarTwoTone
                twoToneColor={COLORS.PRIMARY}
                style={{
                  marginRight: "5px",
                  height: "20px",
                }}
              />
              <p
                style={{
                  marginTop: 0,
                  paddingTop: 0,
                  fontSize: "13px",
                }}
              >
                4.2 (190+)
              </p>
            </Row>
          </Row>
        </div>
      </Card>

      <Row
        gutter={24}
        style={{
          marginTop: "10px",
        }}
      >
        <Col span={24}>
          <TabMenu isFixed={false} menuItems={stylistProfileMenu} />
        </Col>
      </Row>
    </>
  );
};

export default StylistProfile;
