import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FormInput from "../components/common/formInput";
import ModalComponent from "../components/common/modal";
import Fade from "react-reveal/Fade";

const Kidney = () => {
  const [data, setData] = useState({
    age: "",
    bp: "",
    sg: "",
    al: "",
    su: "",
    rbc: "",
    pc: "",
    pcc: "",
    ba: "",
    bgr: "",
    bu: "",
    sc: "",
    sod: "",
    pot: "",
    hemo: "",
    pcv: "",
    wc: "",
    rc: "",
    htn: "",
    dm: "",
    cad: "",
    appet: "",
    pe: "",
    ane: "",
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
      bp: "",
      sg: "",
      al: "",
      su: "",
      rbc: "",
      pc: "",
      pcc: "",
      ba: "",
      bgr: "",
      bu: "",
      sc: "",
      sod: "",
      pot: "",
      hemo: "",
      pcv: "",
      wc: "",
      rc: "",
      htn: "",
      dm: "",
      cad: "",
      appet: "",
      pe: "",
      ane: "",
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
                <h1 className="head-div-second-text">Kidney Disease</h1>
              </Fade>
            </section>
          </div>
        </div>
      </div>
      <div className="main-div" id="about">
        <Fade cascade>
          <section className="div-1 about">
            <h1 className="heading">What is a Kidney Disease?</h1>
            <div>
              <p className="text mt-4 mb-3">
                Chronic kidney disease, also called chronic kidney failure,
                describes the gradual loss of kidney function. Your kidneys
                filter wastes and excess fluids from your blood, which are then
                excreted in your urine. When chronic kidney disease reaches an
                advanced stage, dangerous levels of fluid, electrolytes and
                wastes can build up in your body.
              </p>
              <p className="text mt-4 mb-3">
                In the early stages of chronic kidney disease, you may have few
                signs or symptoms.{" "}
                <span style={{ color: "#0073ff" }}>Chronic kidney disease</span>{" "}
                may not become apparent until your kidney function is
                significantly impaired.
              </p>
              <p className="text my-3">
                Treatment for chronic kidney disease focuses on slowing the
                progression of the kidney damage, usually by controlling the
                underlying cause. Chronic kidney disease can progress to
                end-stage kidney failure, which is fatal without artificial
                filtering (<span style={{ color: "#0073ff" }}>dialysis</span>)
                or a kidney transplant.
              </p>
            </div>
          </section>
          <section className="div-1 about mt-5">
            <h1 className="heading">Symptoms</h1>
            <div>
              <p className="text mt-4 mb-3">
                Signs and symptoms of chronic kidney disease develop over time
                if kidney damage progresses slowly. Signs and symptoms of kidney
                disease may include:
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
                Following are some of the risk factors of a chronic kidney
                disease:
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
                    name="bp"
                    type="number"
                    handleChange={handleChange}
                    value={data.bp}
                    label="Blood Pressure (in mm/Hg)"
                    required
                  />
                  <FormInput
                    name="sg"
                    type="number"
                    handleChange={handleChange}
                    value={data.sg}
                    label="Specific Gravity (e.g. 1.005,1.010,1.015)"
                    required
                  />
                  <FormInput
                    name="al"
                    type="number"
                    handleChange={handleChange}
                    value={data.al}
                    label="Albumin (e.g. 1,2,3,4)"
                    required
                  />
                  <FormInput
                    name="su"
                    type="number"
                    handleChange={handleChange}
                    value={data.su}
                    label="Sugar (e.g. 1,2,3,4)"
                    required
                  />
                  <FormInput
                    name="rbc"
                    handleChange={handleChange}
                    value={data.rbc}
                    label="Red Blood Cells (normal or abnormal)"
                    required
                  />
                  <FormInput
                    name="pc"
                    handleChange={handleChange}
                    value={data.pc}
                    label="Pus Cell (normal or abnormal)"
                    required
                  />
                  <FormInput
                    name="pcc"
                    type="number"
                    handleChange={handleChange}
                    value={data.pcc}
                    label="Pus Cell Clumps (present or notpresent)"
                    required
                  />
                  <FormInput
                    name="ba"
                    handleChange={handleChange}
                    value={data.ba}
                    label="Bacteria (present or notpresent)"
                    required
                  />
                  <FormInput
                    name="bgr"
                    handleChange={handleChange}
                    value={data.bgr}
                    label="Blood Glucose Random (in mgs/dl)"
                    required
                  />
                  <FormInput
                    name="bu"
                    type="number"
                    handleChange={handleChange}
                    value={data.bu}
                    label="Blood Urea (in mgs/dl)"
                    required
                  />
                  <FormInput
                    name="ba"
                    handleChange={handleChange}
                    value={data.ba}
                    label="Bacteria (present or notpresent)"
                    required
                  />
                  <FormInput
                    name="bgr"
                    type="number"
                    handleChange={handleChange}
                    value={data.bgr}
                    label="Blood Glucose Random (in mgs/dl)"
                    required
                  />
                  <FormInput
                    name="bu"
                    type="number"
                    handleChange={handleChange}
                    value={data.bu}
                    label="Blood Urea (in mgs/dl)"
                    required
                  />
                  <FormInput
                    name="sc"
                    type="number"
                    handleChange={handleChange}
                    value={data.sc}
                    label="Serum Creatinine (in mgs/dl)"
                    required
                  />
                  <FormInput
                    name="sod"
                    type="number"
                    handleChange={handleChange}
                    value={data.sod}
                    label="Sodium (in mEq/L)"
                    required
                  />
                  <FormInput
                    name="pot"
                    type="number"
                    handleChange={handleChange}
                    value={data.pot}
                    label="Potassium (in mEq/L)"
                    required
                  />
                  <FormInput
                    name="hemo"
                    type="number"
                    handleChange={handleChange}
                    value={data.hemo}
                    label="Haemoglobin (in gms)"
                    required
                  />
                  <FormInput
                    name="pcv"
                    type="number"
                    handleChange={handleChange}
                    value={data.pcv}
                    label="Packed Cell Volume"
                    required
                  />
                  <FormInput
                    name="wc"
                    type="number"
                    handleChange={handleChange}
                    value={data.wc}
                    label="White Blood Cell Count (in millions/cmm)"
                    required
                  />
                  <FormInput
                    name="rc"
                    type="number"
                    handleChange={handleChange}
                    value={data.rc}
                    label="Red Blood Cell Count (in millions/cmm)"
                    required
                  />
                  <FormInput
                    name="htn"
                    handleChange={handleChange}
                    value={data.htn}
                    label="Hypertension (yes or no)"
                    required
                  />
                  <FormInput
                    name="dm"
                    handleChange={handleChange}
                    value={data.dm}
                    label="Diabetes Mellitus (yes or no)"
                    required
                  />
                  <FormInput
                    name="cad"
                    handleChange={handleChange}
                    value={data.cad}
                    label="Coronary Artery Disease (yes or no)"
                    required
                  />
                  <FormInput
                    name="appet"
                    handleChange={handleChange}
                    value={data.appet}
                    label="Appetite (good or poor)"
                    required
                  />
                  <FormInput
                    name="pe"
                    handleChange={handleChange}
                    value={data.pe}
                    label="Pedal Edema (yes or no)"
                    required
                  />
                  <FormInput
                    name="ane"
                    handleChange={handleChange}
                    value={data.ane}
                    label="Anemia (yes or no)"
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

export default Kidney;

const SymptomsData = [
  {
    text: "Nausea",
  },
  {
    text: "Vomiting",
  },
  {
    text: "Loss of appetite",
  },
  {
    text: "Sleep problems",
  },
  {
    text: "Persistent itching",
  },
  {
    text: "Fatigue and weakness",
  },
  {
    text: "Decreased mental sharpness",
  },
  {
    text: "Muscle twitches and cramps",
  },
  {
    text: "Swelling of feet and ankles",
  },
  {
    text: "Changes in how much you urinate",
  },
  {
    text: "Shortness of breath, if fluid builds up in the lungs",
  },
  {
    text: "High blood pressure (hypertension) that's difficult to control",
  },
];

const RiskData = [
  {
    text: "Obesity",
  },
  {
    text: "Smoking",
  },
  {
    text: "Diabetes",
  },
  {
    text: "Older age",
  },
  {
    text: "High blood pressure",
  },
  {
    text: "Abnormal kidney structure",
  },
  {
    text: "Family history of kidney disease",
  },
  {
    text: "Heart and blood vessel (cardiovascular) disease",
  },
  {
    text: "Being African-American, Native American or Asian-American",
  },
];
