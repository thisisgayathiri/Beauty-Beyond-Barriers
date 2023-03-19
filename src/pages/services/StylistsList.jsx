import {
  FilterOutlined,
  LeftOutlined,
  SortAscendingOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { Badge, Card, Col, Row, Select, Space, Tag } from "antd";
import React, { useState } from "react";
import TabMenu from "../../components/common/TabMenu";
import Location from "../../components/Location";
import { COLORS } from "../../constants/colors";
import "./SalonsList.css";
import stylists from "../../data/stylists";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";
import MyDatePicker from "../../components/common/MyDatePicker";
import menuItems from "../../data/menu";
import CustomRibbon from "../../components/common/CustomRibbon";
import FilterList from "../../components/FilterList";

const StylistsList = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const stylistsCard = _.map(stylists, (s) => {
    return (
      <NavLink to="/profile-stylist">
        <div
          style={{
            position: "relative",
          }}
        >
          <CustomRibbon
            text={s.available ? "Available" : "Busy"}
            color={s.available ? "#23A457" : "#F15E63"}
          >
            <Card
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
                  <Col span={13}>
                    <Title className="card-title" level={5}>
                      {s.name}
                    </Title>
                  </Col>
                  <Col
                    span={11}
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingRight: "5px",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "28px",
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <img
                        src="/images/logo-ally.png"
                        alt="logo"
                        height={"100%"}
                        width={"100%"}
                      />
                    </div>
                    trained
                  </Col>
                </Row>
                <Row>
                  <Col>
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
              </div>
            </Card>
          </CustomRibbon>
        </div>
      </NavLink>
    );
  });

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <FilterList
        isStylistFilter={true}
        show={showFilter}
        onClick={toggleFilter}
      />
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
          <MyDatePicker />
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
            onClick={toggleFilter}
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
            <span className="badge">Trained</span>
          </Badge>
          <Badge>
            <span className="badge">At-home service</span>
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

      <TabMenu menuItems={menuItems} />
    </div>
  );
};

export default StylistsList;
