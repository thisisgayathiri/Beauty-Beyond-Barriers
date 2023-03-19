import React from "react";
import { Divider, Table,Button, Space } from 'antd';

import { COLORS } from "../../constants/colors";
  
const columns = [
  {
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    dataIndex: 'age',
  },
  {
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'Thumbnail',
    age: 'Hair Stylist',
    address: 'Ace',
  },
  {
    key: '2',
    name: 'Thumbnail',
    age: 'Nail Treatments',
    address: 'Platinum',
  },
  {
    key: '3',
    name: 'Thumbnail',
    age: 'Facial and Skin Care',
    address: 'Gold',
  },
  {
    key: '4',
    name: 'Thumbnail',
    age: 'Massages',
    address: 'Gold',
  },

];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const ProfileService = () => {
  return (
    <div>
      <Table pagination={false} showHeader={false}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <div>
      <Space direction="vertical" style={{ width: '100%' }}>
    
    <Button disabled block
            size="large"
            htmlType="submit"
            style={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.PRIMARY_LIGHT,
              fontWeight: 500,
              borderColor: COLORS.PRIMARY_LIGHT,
            }}className="login-form-button"
            >
              Book Slots
            </Button>
        </Space>
      </div>
    </div>
  );
};

export default ProfileService;
