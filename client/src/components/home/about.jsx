import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../../assets/about_bg.png";
import BannerImg1 from "../../assets/banner_img_1.svg";
import BannerImg2 from "../../assets/banner_img_2.svg";
import Fade from "react-reveal/Fade";

const About = () => {

  return (
    <div className="main-div" id="about" style={{ padding: "70px" }}>
      <Fade>
        <section className="div-1 about">
          <Row className="inner-section">
            <Col md={6} lg={6} className="center">
              <img src={Img} alt="Service Guy Img" className="me-5" />
            </Col>
            <Col md={6} lg={6}>
              <h1 className="heading">What we do?</h1>
              <div>
                <p className="text mt-4">
                  HealthDoc is a healthcare system that tells you whether or
                  not, you are at risk of diseases such as various Heart
                  diseases, Liver and Kidney diseases by using Machine learning
                  models trained of data collected from various parts of worlds
                  to predict the outcomes, the models are trained to gain
                  &gt;90% accuracy.
                </p>
              </div>
              <div className="text my-3">
                Worried about the possibility of a chronic disease?
              </div>
              <Link
                className="button btn btn-primary"
                variant="primary"
                to="/auth"
              >
                {" "}
                Register now
              </Link>
              <div className="banner_item">
                <div className="single_item">
                  <img src={BannerImg1} alt="" />
                  <h5>Prediction</h5>
                </div>
                <div className="single_item">
                  <img src={BannerImg2} alt="" />
                  <h5>Appointment</h5>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Fade>
    </div>
  );
};

export default About;
