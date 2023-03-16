import {
  FilterOutlined,
  LeftOutlined,
  SortAscendingOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { Badge, Card, Col, DatePicker, Row, Select, Space, Tag } from "antd";
import React from "react";
import TabMenu from "../../components/common/TabMenu";
import Location from "../../components/Location";
import { COLORS } from "../../constants/colors";
import "./SalonsList.css";
import stylists from "../../data/stylists";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";

const StylistsList = () => {
  const stylistsCard = _.map(stylists, (s) => {
    return (
      <Badge.Ribbon text="Trained">
        <Card
          //   actions={[
          //     <PhoneOutlined
          //       style={{
          //         fontSize: "20px",
          //         rotate: "105deg",
          //       }}
          //     />,
          //     <>
          //       <Badge dot={true} status={'success'}>
          //         <MessageOutlined
          //           style={{
          //             fontSize: "20px",
          //           }}
          //         />
          //         ,
          //       </Badge>
          //     </>,
          //     <HeartOutlined
          //       style={{
          //         fontSize: "20px",
          //       }}
          //     />,
          //   ]}
          cover={
            <div
              style={{
                overflow: "hidden",
                height: "200px",
                backgroundColor: "#000000",
              }}
            >
              <img
                style={{ height: "100%" }}
                alt="stylist"
                src={"/images/stylists/" + s.avatar}
              />
            </div>
          }
        >
          <div className="card-text-wrapper">
            <Row>
              <Col span={14}>
                <Title className="card-title" level={5}>
                  {s.name}
                </Title>
              </Col>
              <Col
                span={10}
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <StarTwoTone
                  twoToneColor={COLORS.PRIMARY}
                  style={{
                    marginRight: "5px",
                    height: "20px",
                  }}
                />
                <span>{s.rating}</span>
              </Col>
            </Row>
            <Row>
              <span
                style={{
                  marginBottom: "10px",
                }}
              >
                {s.available ? (
                  <Tag color="#23A457">Available</Tag>
                ) : (
                  <Tag color="#F15E63">Busy</Tag>
                )}
              </span>
            </Row>
          </div>
        </Card>
      </Badge.Ribbon>
    );
  });

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
        <Col span={2}>
          <NavLink to={"/services"}>
            <LeftOutlined />
          </NavLink>
        </Col>
        <Col span={13}>
          <Location location="3604 Chestnut, Philadelphia" />
        </Col>
        <Col span={7}>
          <Space direction="horizontal" size={0}>
            <span style={{ marginRight: "10px" }}>For</span>
            <Select
              defaultValue="Myself"
              options={[
                { value: "Mom", label: "Mom" },
                { value: "Dad", label: "Dad" },
                { value: "Pet", label: "Pet" },
              ]}
            />
          </Space>
        </Col>
      </Row>

      <Row
        style={{
          margin: "20px",
          alignItems: "stretch",
        }}
      >
        <Col span={18}>
          <DatePicker size="large" className="date-picker" />
        </Col>
        <Col span={3}>
          <SortAscendingOutlined
            className="icon-container"
            style={{
              color: COLORS.SECONDARY,
            }}
          />
        </Col>
        <Col span={3}>
          <FilterOutlined
            className="icon-container"
            style={{
              color: COLORS.SECONDARY,
            }}
          />
        </Col>
      </Row>

      <Row
        style={{
          whiteSpace: "nowrap",
          overflow: "scroll",
          padding: "10px 20px 20px 20px",
          margin: "10px",
          marginTop: "0px",
          backgroundColor: COLORS.PRIMARY_LIGHT,
        }}
      >
        <Space direction="horizontal" size={10}>
          <Badge>
            <span className="badge">Virtual pre-consultation</span>
          </Badge>
          <Badge>
            <span className="badge">At-home service</span>
          </Badge>
          <Badge>
            <span className="badge">Trained</span>
          </Badge>
        </Space>
      </Row>

      <Row
        style={{
          margin: "20px",
          alignItems: "stretch",
        }}
      >
        <Col span={24}>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            {stylistsCard}
          </Space>
        </Col>
      </Row>

      <TabMenu />
    </div>
  );
};

export default StylistsList;
