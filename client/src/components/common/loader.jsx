import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="main_loading" id="loading">
      <Spinner animation="grow" variant="primary" size="lg" />
    </div>
  );
};

export default Loader;
