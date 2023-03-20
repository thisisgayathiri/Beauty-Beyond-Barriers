import React, { useState } from "react";
import MyDatePicker from "../../components/common/MyDatePicker";
import { Button, Col, Modal, Radio, Result, Row, Select } from "antd";
import Title from "antd/es/typography/Title";
import { COLORS } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const ProfileBooking = () => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    navigate("/services");
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <Row justify={'left'}>
        <Title
          style={{
            padding: "0 0 0 0",
            color: COLORS.SECONDARY,
            marginLeft: "10px",
            textAlign: "left",
          }}
          level={5}
        >
          Date of appointment
        </Title>
      </Row>
      <Row justify={"center"}>
        <Col span={22}>
          <MyDatePicker
            style={{
              marginLeft: "30px",
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col span={22}>
          <Title
            style={{
              padding: "0 0 0 0",
              color: COLORS.SECONDARY,
              marginLeft: "10px",
              textAlign: "left",
            }}
            level={5}
          >
            Choose the time slot that works for you
          </Title>
        </Col>
        <Col
          style={{
            margin: "0 0 20px 20px",
            textAlign: "left",
          }}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio
              style={{
                marginTop: "7px",
              }}
              value={1}
            >
              09:00 am - 12:00 am
            </Radio>
            <Radio
              style={{
                marginTop: "7px",
              }}
              value={2}
            >
              01:00 pm -04:00 pm
            </Radio>
            <Radio
              style={{
                marginTop: "7px",
              }}
              value={3}
            >
              05:00 pm - 08:00 pm
            </Radio>
            <Radio
              style={{
                marginTop: "7px",
              }}
              value={4}
            >
              08:00 pm - 10:00 pm
            </Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Title
          level={5}
          style={{
            marginLeft: "10px",
            marginTop: "5px",
          }}
        >
          Recurring appointment
        </Title>
      </Row>
      <Row>
        <Col>
          <Select
            style={{
              marginLeft: "10px",
              marginBottom: "20px",
            }}
            defaultValue="Does not repeat"
            onChange={handleChange}
            options={[
              { value: "Does not repeat", label: "Does not repeat" },
              { value: "Weekly on Monday", label: "Weekly on Monday" },
              {
                value: "Monthly on third monday",
                label: "Monthly on third monday",
              },
              {
                value: "Custom...",
                label: "Custom...",
              },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button
            size="large"
            htmlType="submit"
            onClick={showModal}
            style={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.PRIMARY_LIGHT,
              fontWeight: 500,
              marginBottom: "50px",
            }}
            className="login-form-button"
          >
            Book appointment
          </Button>
        </Col>
      </Row>

      <Modal
        open={open}
        closable={false}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <Result
          status="success"
          title="Your appointment has been booked."
          subTitle="You will soon get a confirmation
        from the stylist"
        />
      </Modal>
    </>
  );
};

export default ProfileBooking;
