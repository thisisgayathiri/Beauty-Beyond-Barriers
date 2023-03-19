import React from "react";
import { Table, Button, Space, Tag, Rate, Row, Col } from "antd";

import { COLORS } from "../../constants/colors";
import Title from "antd/es/typography/Title";
import "./Profile.css";
import stylistServices from "../../data/stylistServices";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    key: "services",
    dataIndex: "service",
  },
  {
    key: "rate",
    dataIndex: "rate",
    render: (rate) => (
      <span>
        <Rate
          style={{
            fontSize: "15px",
          }}
          disabled
          defaultValue={rate}
        />
      </span>
    ),
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const ProfileService = () => {
  const navigate = useNavigate();

  const book = () => {
    navigate("/profile-stylist?tab=BOOK");
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Title
            level={5}
            style={{
              color: COLORS.SECONDARY,
              fontWeight: 500,
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            Choose the services you're interested in
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            style={{
              padding: 0,
              margin: 0,
            }}
            className="profile-service-table"
            pagination={false}
            showHeader={false}
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={stylistServices}
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Button
            onClick={book}
            size="large"
            htmlType="submit"
            style={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.PRIMARY_LIGHT,
              fontWeight: 500,
              borderColor: COLORS.PRIMARY_LIGHT,
              marginBottom: "50px",
            }}
            className="login-form-button"
          >
            Proceed to book
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProfileService;
