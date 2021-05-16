import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import {
  loginUser,
  loginStart,
  registerUser,
  registerStart,
} from "../../redux/user/actions";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import DoctorImg from "../../assets/online_doctor.jpg";

const Content = ({ loginUser, loginStart, registerUser, registerStart }) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    let mounted = true;
    if (mounted && user.token) {
      history.push("/");
    }
    return () => (mounted = false);
  }, [user]);

  const resetLoginForm = () => {
    setEmail("");
    setPassword("");
  };

  const resetRegisterForm = () => {
    setRegisterEmail("");
    setRegisterPassword("");
    setFirstName("");
    setLastName("");
  };

  const handleLogin = (e) => {
    loginStart();
    e.preventDefault();
    const data = {
      email,
      password,
    };
    loginUser(data, resetLoginForm);
  };

  const handleRegister = (e) => {
    registerStart();
    e.preventDefault();
    const data = {
      email: registerEmail,
      password: registerPassword,
      firstName,
      lastName,
    };
    registerUser(data, resetRegisterForm);
  };
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
                      <Card style={{ width: "100%", height: "fit-content" }}>
                        <Card.Body>
                          <form
                            className="d-flex flex-column"
                            onSubmit={handleRegister}
                          >
                            <TextField
                              label="First Name"
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                            />
                            <TextField
                              label="Last Name"
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                            />
                            <TextField
                              label="Email"
                              type="email"
                              value={registerEmail}
                              onChange={(e) => setRegisterEmail(e.target.value)}
                              required
                            />
                            <TextField
                              label="Password"
                              type="password"
                              value={registerPassword}
                              onChange={(e) =>
                                setRegisterPassword(e.target.value)
                              }
                              required
                            />
                            <Button
                              variant="primary"
                              disabled={user.registerPending}
                              className="mt-4"
                              onClick={handleRegister}
                            >
                              {user.registerPending ? (
                                <Spinner animation="border" variant="light" />
                              ) : (
                                "Submit"
                              )}
                            </Button>
                          </form>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="text-center ps-3" style={{ width: "50%" }}>
                      <h2 className="mb-3">Log In</h2>
                      <Card style={{ width: "100%", height: "fit-content" }}>
                        <Card.Body>
                          <form
                            className="d-flex flex-column"
                            onSubmit={handleLogin}
                          >
                            <TextField
                              label="Email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <TextField
                              label="Password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <Button
                              variant="primary"
                              className="mt-4"
                              onClick={handleLogin}
                              disabled={user.loginPending}
                            >
                              {user.loginPending ? (
                                <Spinner animation="border" variant="light" />
                              ) : (
                                "Submit"
                              )}
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

Content.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loginStart: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  registerStart: PropTypes.func.isRequired,
};

export default connect(null, {
  loginUser,
  loginStart,
  registerUser,
  registerStart,
})(Content);
