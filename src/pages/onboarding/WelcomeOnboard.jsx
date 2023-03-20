import { RightCircleTwoTone } from "@ant-design/icons";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { useEffect, useState } from "react";
import LandingPage from "../../components/common/LandingPage";
import SpeechRecognizerWhite from "../../components/speech/SpeechRecognizerWhite";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const WelcomeOnboard = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobileSite = windowSize.innerWidth < 700 ? true : false;

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {isMobileSite && (
        <div
          className="mobile-site-onboarding"
          style={{
            backgroundColor: COLORS.PRIMARY,
            height: "100vh",
          }}
        >
          <Row>
            <Col span={24}>
              <div
                style={{
                  height: "50vh",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img width={'325px'} height= {'300px'} src="/images/logo-1.png" alt="logo" />
              </div>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Title
              level={2}
              style={{
                padding: "0px 20px 0 20px",
                color: COLORS.SECONDARY,
              }}
            >
              beauty beyond barriers
            </Title>
          </Row>

          <Row justify={"center"}>
            <Title
              level={3}
              style={{
                padding: "0 10% 20px 10%",
                textAlign: "center",
                color: COLORS.SECONDARY,
                fontWeight: 500,
              }}
            >
              Beauty for every need, every day.
            </Title>
          </Row>

          <Row justify={"center"} style={{
            marginTop: '40px'
          }}>
            <NavLink to="/sign-up">
              <RightCircleTwoTone
                style={{ fontSize: "50px" }}
                twoToneColor={COLORS.PRIMARY}
              />
            </NavLink>
          </Row>
        </div>
      )}

      {!isMobileSite && <LandingPage />}
      <SpeechRecognizerWhite/>
    </div>
  );
};

export default WelcomeOnboard;
