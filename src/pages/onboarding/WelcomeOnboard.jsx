import { RightCircleTwoTone } from "@ant-design/icons";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { useEffect, useState } from "react";
import LandingPage from "../../components/common/LandingPage";
import SpeechRecognizer from "../../components/speech/SpeechRecognizer";

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
                  height: "60vh",
                }}
              >
                Image here
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
              Beauty is everywhere
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
              Discover beauty services and professionals near you
            </Title>
          </Row>

          <Row justify={"center"}>
            <NavLink to="/sign-up">
              <RightCircleTwoTone
                style={{ fontSize: "50px" }}
                twoToneColor={COLORS.PRIMARY}
              />
            </NavLink>
          </Row>
        </div>
      )}

      <SpeechRecognizer></SpeechRecognizer>

      {!isMobileSite && <LandingPage />}
    </div>
  );
};

export default WelcomeOnboard;
