import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import BrandLogo from "../../assets/healthcare.svg";

const Header = () => {
  let location = useLocation();
  const changeBackground = () => {
    let header = document.querySelector(".header-nav");
    if (window.scrollY < 200 && location.pathname !== "/predict") {
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
          <NavLink className="px-3 nav-link" to="/">
            <Fade>Predict Now</Fade>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
