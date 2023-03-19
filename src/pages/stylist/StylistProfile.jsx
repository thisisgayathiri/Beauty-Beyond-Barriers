import {
  HeartOutlined,
  LeftOutlined,
  MessageOutlined,
  PhoneOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { Col, Row, Card, Badge } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import Title from "antd/es/typography/Title";
import "./StylistProfile.css";
import TabMenu from "../../components/common/TabMenu";
import menuItems from "../../data/menu";
import stylistProfileMenu from "../../data/stylistProfileMenu";
import { COLORS } from "../../constants/colors";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const StylistProfile = () => {
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
        className="stylist-profile-card"
        actions={[
          <>
            <NavLink to='/call'>
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
              Coby Halvorsin
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

export default StylistProfile;
