import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import DoctorImg from "../../assets/online_doctor.jpg";

const Content = () => {
  return (
    <div className="bg-div register" id="home">
      <div className="head mx-5">
        <div
          className="head-div mx-auto main-div"
          style={{ padding: "70px 0" }}
        >
          <Fade>
            <Container>
              <Row>
                <Col md={6} lg={5} className="center flex-column">
                  <p className="head-div-fourth-text">Welcome to HealthDoc</p>
                  <img
                    src={DoctorImg}
                    alt="doctor-img"
                    height="auto"
                    width="400px"
                  />
                </Col>
                <Col
                  md={6}
                  lg={7}
                  className="d-flex justify-center align-center"
                >
                  <section className="d-flex">
                    <div className="text-center" style={{ width: "50%" }}>
                      {" "}
                      <h2 className="mb-3">Register</h2>
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <form className="d-flex flex-column">
                            <TextField label="First Name" />
                            <TextField label="Last Name" />
                            <TextField label="Email" />
                            <TextField label="Password" />
                            <Button variant="primary" className="mt-4">
                              Submit
                            </Button>
                          </form>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="text-center ps-3" style={{ width: "50%" }}>
                      <h2 className="mb-3">Log In</h2>
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <form className="d-flex flex-column">
                            <TextField label="Email" />
                            <TextField label="Password" />
                            <Button variant="primary" className="mt-4">
                              Submit
                            </Button>
                          </form>
                        </Card.Body>
                      </Card>
                    </div>
                  </section>
                </Col>
              </Row>
            </Container>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Content;
