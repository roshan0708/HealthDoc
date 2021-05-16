import React from "react";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import DoctorImg from "../../assets/home_cover.png";

const Cover = () => {
  return (
    <div className="bg-div" id="home">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div" style={{ padding: "70px" }}>
          <Fade>
            <Container>
              <Row>
                <Col lg={5} className="align-center">
                  <section className="div-1">
                    <h1 className="my-1 head-div-first-text">Hello there!</h1>
                    <h1 className="head-div-second-text">We're HealthDoc.</h1>
                    <h1 className="head-div-third-text">Better. Accurate.</h1>
                    <p className="head-div-fourth-text">
                      HealthDoc is a healthcare system that tells you whether or
                      not, you are at risk of diseases such as various Heart
                      diseases, Liver and Kidney diseases.
                    </p>
                  </section>
                </Col>
                <Col lg={7}>
                  <img
                    src={DoctorImg}
                    alt="doctor-img"
                    height="auto"
                    width="100%"
                  />
                </Col>
              </Row>
            </Container>
          </Fade>
        </div>
      </div>
      <Fade>
        <span className="scroll-btn">
          <span className="mouse">
            <span></span>
          </span>
        </span>
      </Fade>
    </div>
  );
};

export default Cover;
