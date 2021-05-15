import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="contact-div" id="contact">
      <div className="head mx-5">
        <div className="main-div">
          <Fade cascade>
            <section className="div-1 contact">
              <h1 className="my-3 heading" style={{ textAlign: "center" }}>
                Get In Touch
              </h1>
              <p>
                Have doubts? Need something? We're always here to answer your
                queries. Click on the button below, drop a message and we'll try
                our best to get back to you!
              </p>
              <a href="#home" className="button btn btn-outline-primary my-3">
                Say Hello
              </a>
            </section>
          </Fade>
          <p className="footer">Designed & Built by Team Neutrinos💓</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
