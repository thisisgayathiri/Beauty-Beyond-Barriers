import {
  HeartOutlined,
  LeftOutlined,
  MessageOutlined,
  PhoneOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { Badge, Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { NavLink } from "react-router-dom";
import "./SalonProfile.css";
import { COLORS } from "../../constants/colors";
import TabMenu from "../../components/common/TabMenu";
import menuItems from "../../data/menu";
import stylistProfileMenu from "../../data/stylistProfileMenu";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SalonProfile = () => {
  let query = useQuery();
  const tab = query.get("tab");

  const getIndex = (tab) => {
    if (tab === "SERVICES") return "1";
    if (tab === "BOOK") return "2";
    if (tab === "ABOUT") return "3";
  };

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
        className="salon-profile-card"
        actions={[
          <>
            <NavLink to="/call">
              <PhoneOutlined
                style={{
                  fontSize: "20px",
                  rotate: "105deg",
                }}
              />
            </NavLink>
          </>,
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
              height: "300px",
              overflow: "hidden",
              backgroundColor: "black",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ height: "100%" }}
              alt="salon"
              src={"/images/salons/a.jpg"}
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
              Vurve
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
                4.4 (190+)
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
          <TabMenu
            isFixed={false}
            menuItems={stylistProfileMenu}
            activeIndex={getIndex(tab)}
          />
        </Col>
      </Row>

      <TabMenu menuItems={menuItems} />
    </>
  );
};

export default SalonProfile;
