import React, { useState } from 'react';
import MyDatePicker from "../../components/common/MyDatePicker";
import Card from "antd/es/card/Card";
import { Radio, Space } from 'antd';
import Title from "antd/es/typography/Title";
import { COLORS } from "../../constants/colors";

const options = [
  { label: '[09:00 AM - 12:00 AM]', value: 'Morning',disabled: true },
  { label: '[01:00 PM -04:00 PM]', value: 'Afternoon'},
  { label: '[05:00 PM - 08:00 PM]', value: 'Evening' },
  { label: '[08:00 PM - 10:00 PM]', value: 'Night' },
];

const ProfileBooking = () => {

  
  const [value, setValue] = useState('Choose Your Favorable Time Slot !');
  
  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue(value);
  };
  
  return <>
    <Space direction='vertical'>
  <MyDatePicker />
   <Card>
   <Space direction='vertical'>
   <Title
        style={{
          padding: "0 0px 0px 0px",
          fontWeight: 400,
          color: COLORS.SECONDARY,
        }}
        level={5}
      >
        Book Your Favorable Slot
      </Title>
      <br/><br/>
  <Radio.Group options={options} onChange={onChange3} value={value} buttonStyle="solid" optionType="button" 
  style={{ width: "250px"}}/>
   </Space>
  </Card>
 </Space>
  </>;
};

export default ProfileBooking;
