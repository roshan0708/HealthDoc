import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FormInput from "../components/common/formInput";
import ModalComponent from "../components/common/modal";
import Fade from "react-reveal/Fade";

const Liver = () => {
  const [data, setData] = useState({
    age: "",
    total_bilirubin: "",
    direct_bilirubin: "",
    alamine_aminotransferase: "",
    aspartate_aminotransferase: "",
    total_proteins: "",
    albumin: "",
    albumin_and_globulin_ratio: "",
  });

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      setModalShow(true);
    }, 4000);
    setData({
      age: "",
      total_bilirubin: "",
      direct_bilirubin: "",
      alamine_aminotransferase: "",
      aspartate_aminotransferase: "",
      total_proteins: "",
      albumin: "",
      albumin_and_globulin_ratio: "",
    });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="disease-div" id="disease">
        <div className="head mx-5">
          <div className="head-div mx-auto main-div">
            <section className="heading">
              <Fade>
                <h1 className="head-div-second-text">Liver Disease</h1>
              </Fade>
            </section>
          </div>
        </div>
      </div>
      <div className="main-div" id="about">
        <Fade cascade>
          <section className="div-1 about">
            <h1 className="heading">What is a Liver Disease?</h1>
            <div>
              <p className="text mt-4 mb-3">
                The liver is an organ about the size of a football. It sits just
                under your rib cage on the right side of your abdomen. The liver
                is essential for digesting food and ridding your body of toxic
                substances.
              </p>
              <p className="text mt-4 mb-3">
                Liver disease can be inherited (
                <span style={{ color: "#0073ff" }}>genetic</span>). Liver
                problems can also be caused by a variety of factors that damage
                the liver, such as viruses, alcohol use and obesity.
              </p>
              <p className="text my-3">
                Over time, conditions that damage the liver can lead to scarring
                (<span style={{ color: "#0073ff" }}>cirrhosis</span>), which can
                lead to liver failure, a life-threatening condition. But early
                treatment may give the liver time to heal.
              </p>
            </div>
          </section>
          <section className="div-1 about mt-5">
            <h1 className="heading">Symptoms</h1>
            <div>
              <p className="text mt-4 mb-3">
                Liver disease doesn't always cause noticeable signs and
                symptoms. If signs and symptoms of liver disease do occur, the
                may include:
              </p>
              <div className="list-div">
                <ul className="lists">
                  {SymptomsData.map((data, ind) => {
                    return (
                      <li className="my-2 list-item" key={data + ind}>
                        {data.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
          <section className="div-1 about mt-5">
            <h1 className="heading">Risk Factors</h1>
            <div>
              <p className="text mt-4 mb-3">
                Following are some of the risk factors of a heart disease:
              </p>
              <div className="list-div">
                <ul className="lists">
                  {RiskData.map((data, ind) => {
                    return (
                      <li className="my-2 list-item" key={data + ind}>
                        {data.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </Fade>
      </div>
      <div className="main-div" id="about" style={{ background: "white" }}>
        <Fade cascade>
          <section className="div-1 about">
            <h1 className="heading">Enter the details below:</h1>
            <div>
              <p className="text mt-4 mb-3"></p>
              <div className="form-div">
                <form onSubmit={handleSubmit}>
                  <FormInput
                    name="age"
                    type="number"
                    handleChange={handleChange}
                    value={data.age}
                    label="Age (years)"
                    required
                  />
                  <FormInput
                    name="total_bilirubin"
                    type="number"
                    handleChange={handleChange}
                    value={data.total_bilirubin}
                    label="Total Bilirubin"
                    required
                  />
                  <FormInput
                    name="direct_bilirubin"
                    type="number"
                    handleChange={handleChange}
                    value={data.direct_bilirubin}
                    label="Direct Bilirubin"
                    required
                  />
                  <FormInput
                    name="alamine_aminotransferase"
                    type="number"
                    handleChange={handleChange}
                    value={data.alamine_aminotransferase}
                    label="Alamine Aminotransferase"
                    required
                  />
                  <FormInput
                    name="aspartate_aminotransferase"
                    type="number"
                    handleChange={handleChange}
                    value={data.aspartate_aminotransferase}
                    label="Aspartate Aminotransferase"
                    required
                  />
                  <FormInput
                    name="total_proteins"
                    type="number"
                    handleChange={handleChange}
                    value={data.total_proteins}
                    label="Total Proteins"
                    required
                  />
                  <FormInput
                    name="albumin"
                    type="number"
                    handleChange={handleChange}
                    value={data.albumin}
                    label="Albumin"
                    required
                  />
                  <FormInput
                    name="albumin_and_globulin_ratio"
                    type="number"
                    handleChange={handleChange}
                    value={data.albumin_and_globulin_ratio}
                    label="Albumin and Globulin Ratio"
                    required
                  />
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className="button"
                  >
                    Submit
                  </Button>
                </form>
                {loading && <p>Loading...</p>}
                <ModalComponent
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  text={text}
                />
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </>
  );
};

export default Liver;

const SymptomsData = [
  {
    text: "Itchy skin",
  },
  {
    text: "Chronic fatigue",
  },
  {
    text: "Pale stool color",
  },
  {
    text: "Dark urine color",
  },
  {
    text: "Loss of appetite",
  },
  {
    text: "Nausea or vomiting",
  },
  {
    text: "Tendency to bruise easily",
  },
  {
    text: "Abdominal pain and swelling",
  },
  {
    text: "Swelling in the legs and ankles",
  },
  {
    text: "Skin and eyes that appear yellowish (jaundice)",
  },
];

const RiskData = [
  {
    text: "Obesity",
  },
  {
    text: "Type 2 diabetes",
  },
  {
    text: "Unprotected sex",
  },
  {
    text: "Heavy alcohol use",
  },
  {
    text: "Tattoos or body piercings",
  },
  {
    text: "Family history of liver disease",
  },
  {
    text: "Blood transfusion before 1992",
  },
  {
    text: "Injecting drugs using shared needles",
  },
  {
    text: "Exposure to certain chemicals or toxins",
  },
  {
    text: "Exposure to other people's blood and body fluids",
  },
];
