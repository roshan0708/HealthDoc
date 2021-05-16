import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const PredictHome = () => {
  const [checkedValue, setCheckedValue] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/predict/${checkedValue}`);
  };

  return (
    <div className="predict-div" id="predict">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
          <Fade cascade>
            <section className="div-1">
              <h1 className="head-div-second-text">
                Worried that you might be suffering from a chronic disease?
              </h1>
              <h1 className="head-div-third-text">
                Go ahead and Predict now -{" "}
              </h1>
              <p className="head-div-fourth-text">
                Choose from the following diseases:-
              </p>
              <div className="ml-1">
                <form className="mt-3" onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      label="Heart Disease"
                      value="heart"
                      className="mb-3"
                      checked={checkedValue === "heart"}
                      onChange={(e) => setCheckedValue(e.target.value)}
                    />
                    <Form.Check
                      type="radio"
                      label="Liver Disease"
                      value="liver"
                      className="mb-3"
                      checked={checkedValue === "liver"}
                      onChange={(e) => setCheckedValue(e.target.value)}
                    />
                    <Form.Check
                      type="radio"
                      label="Kidney Disease"
                      value="kidney"
                      className="mb-3"
                      checked={checkedValue === "kidney"}
                      onChange={(e) => setCheckedValue(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className="button"
                  >
                    Proceed
                  </Button>
                </form>
              </div>
            </section>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PredictHome;
