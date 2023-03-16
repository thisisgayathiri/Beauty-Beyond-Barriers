import {
  EditOutlined,
  EllipsisOutlined,
  FilterOutlined,
  LeftOutlined,
  SettingOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Card, Col, DatePicker, Row, Select, Space } from "antd";
import React from "react";
import TabMenu from "../../components/common/TabMenu";
import Location from "../../components/Location";
import { COLORS } from "../../constants/colors";
import "./SalonsList.css";
import salons from "../../data/salons";
import Meta from "antd/es/card/Meta";

const SalonsList = () => {
  const salonsCard = _.map(salons, (s) => {
    return (
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
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
          <LeftOutlined />
        </Col>
        <Col span={14}>
          <Location location="3604 Chestnut, Philadelphia" />
        </Col>
        <Col span={8}>
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

      <TabMenu />
    </div>
  );
};

export default SalonsList;
