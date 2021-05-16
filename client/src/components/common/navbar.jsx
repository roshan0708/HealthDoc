import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from "../../redux/user/actions";
import Fade from "react-reveal/Fade";
import BrandLogo from "../../assets/healthcare.svg";

const Header = ({ logoutUser }) => {
  const user = useSelector((state) => state.user);
  let location = useLocation();
  const changeBackground = () => {
    let header = document.querySelector(".header-nav");
    if (window.scrollY < 200) {
      header.classList.remove("sticky");
    } else {
      header.classList.add("sticky");
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      className="header-nav"
      fixed="top"
      collapseOnSelect
      bg="light"
      expand="lg"
    >
      <Fade>
        <Navbar.Brand href="/" className="d-flex brand-name me-5">
          <img
            src={BrandLogo}
            width="auto"
            height="50px"
            className="d-inline-block align-top me-3"
            alt="logo"
          />
          <p>HealthDoc</p>
        </Navbar.Brand>
      </Fade>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto me-5">
          <NavLink className="px-3 nav-link" to="/">
            <Fade>Home</Fade>
          </NavLink>
          {location.pathname === "/" && (
            <>
              <Nav.Link className="px-3" href="#about">
                <Fade> About</Fade>
              </Nav.Link>
              <Nav.Link className="px-3" href="#contact">
                <Fade> Contact</Fade>
              </Nav.Link>
            </>
          )}
          {user.token === null && (
            <NavLink className="px-3 nav-link" to="/auth">
              <Fade>Register / Login</Fade>
            </NavLink>
          )}
          {user.token && (
            <>
              <NavLink className="px-3 nav-link" to="/predict">
                <Fade>Predict</Fade>
              </NavLink>
              <p
                className="px-3 nav-link"
                style={{ cursor: "pointer" }}
                onClick={logoutUser}
              >
                <Fade>Log Out</Fade>
              </p>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(Header);
