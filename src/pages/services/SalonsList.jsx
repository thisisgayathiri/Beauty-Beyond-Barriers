import {
  FilterOutlined,
  LeftOutlined,
  SortAscendingOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import { Badge, Card, Col, Row, Select, Space } from "antd";
import React, { useState } from "react";
import TabMenu from "../../components/common/TabMenu";
import Location from "../../components/Location";
import { COLORS } from "../../constants/colors";
import "./SalonsList.css";
import salons from "../../data/salons";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";
import MyDatePicker from "../../components/common/MyDatePicker";
import menuItems from "../../data/menu";
import FilterList from "../../components/FilterList";

const SalonsList = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const salonsCard = _.map(salons, (s) => {
    return (
      <NavLink to="/profile-salon">
      <Card cover={<img alt="salon" src={s.image} />}>
        <div className="card-text-wrapper">
          <Row>
            <Col span={18}>
              <Title className="card-title" level={5}>
                {s.name}
              </Title>
            </Col>
            <Col
              span={5}
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <span
                style={{
                  color: COLORS.SECONDARY,
                  fontSize: "12px",
                }}
              >
                {s.location}
              </span>
            </Col>
          </Row>

          <Row>
            <StarTwoTone
              twoToneColor={COLORS.PRIMARY}
              style={{
                marginRight: "5px",
                height: "20px",
              }}
            />
            <span className="subText">{s.rating}</span>
          </Row>
        </div>
      </Card>
      </NavLink>
    );
  });

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <FilterList show={showFilter} onClick={toggleFilter} />
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
                { value: "Myself", label: "Myself" },
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
          padding: "20px",
          margin: "10px",
          backgroundColor: COLORS.PRIMARY_LIGHT,
        }}
      >
        <Space direction="horizontal" size={10}>
          <Badge>
            <span className="badge">Parking</span>
          </Badge>
          <Badge>
            <span className="badge">Ramps</span>
          </Badge>
          <Badge>
            <span className="badge">Lift</span>
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
            {salonsCard}
          </Space>
        </Col>
      </Row>

      <TabMenu menuItems={menuItems} />
    </div>
  );
};

export default SalonsList;
