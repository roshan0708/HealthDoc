import React, { useState, lazy, Suspense } from "react";
import axios from "axios";
import Loader from "../components/common/loader";
import { Button } from "react-bootstrap";
import ModalComponent from "../components/common/modal";
import Fade from "react-reveal/Fade";
const FormInput = lazy(() => import("../components/common/formInput"));

const Heart = () => {
  const [data, setData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://healthdoc-api.herokuapp.com/predictHeart", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setData({
      age: "",
      sex: "",
      cp: "",
      trestbps: "",
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      exang: "",
      oldpeak: "",
      slope: "",
      ca: "",
      thal: "",
    });
    setLoading(false);
  };

  // let tem=func();
  // if(tem===1){
  //   setText("There is a probablity that you have this disease, please consult your doctor immediately.")
  // } else {
  //   setText("You're all healthy and you shouldn't worry about the possibility that you might be suffering of this disease");
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="disease-div" id="disease">
        <div className="head mx-5">
          <div className="head-div mx-auto main-div">
            <section className="heading">
              <Fade>
                <h1 className="head-div-second-text">Heart Disease</h1>
              </Fade>
            </section>
          </div>
        </div>
      </div>
      <div className="main-div" id="about">
        <Fade cascade>
          <section className="div-1 about">
            <h1 className="heading">What is a Heart Disease?</h1>
            <div>
              <p className="text mt-4 mb-3">
                Heart disease describes a range of conditions that affect your
                heart. Diseases under the heart disease umbrella include blood
                vessel diseases, such as coronary artery disease; heart rhythm
                problems (<span style={{ color: "#0073ff" }}>arrhythmias</span>
                ); and heart defects you're born with (
                <span style={{ color: "#0073ff" }}>
                  congenital heart defects
                </span>
                ), among others.
              </p>
              <p className="text my-3">
                The term "heart disease" is often used interchangeably with the
                term "cardiovascular disease." Cardiovascular disease generally
                refers to conditions that involve narrowed or blocked blood
                vessels that can lead to a heart attack, chest pain (
                <span style={{ color: "#0073ff" }}>angina</span>) or stroke.
                Other heart conditions, such as those that affect your heart's
                muscle, valves or rhythm, also are considered forms of heart
                disease.
              </p>
            </div>
          </section>
          <section className="div-1 about mt-5">
            <h1 className="heading">Symptoms</h1>
            <div>
              <p className="text mt-4 mb-3">
                The most common symptom of coronary artery disease is angina, or
                chest pain. Angina can be described as a discomfort, heaviness,
                pressure, aching, burning, fullness, squeezing, or painful
                feeling in your chest. It can be mistaken for indigestion or
                heartburn. Angina may also be felt in the shoulders, arms, neck,
                throat, jaw, or back.
              </p>
              <p className="text mt-3">
                Other symptoms of coronary artery disease include:
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
                    name="sex"
                    type="number"
                    handleChange={handleChange}
                    value={data.sex}
                    label="Sex (1 = male, 0 = female)"
                    required
                  />
                  <FormInput
                    name="cp"
                    type="number"
                    handleChange={handleChange}
                    value={data.cp}
                    label="Chest Pain: 1 = Typical Angina, 2 = Atypical Angina, 3 = Non-Anginal, 4 = Asymptotic"
                    required
                  />
                  <FormInput
                    name="trestbps"
                    type="number"
                    handleChange={handleChange}
                    value={data.trestbps}
                    label="Resting Blood Pressure (mm Hg)"
                    required
                  />
                  <FormInput
                    name="chol"
                    type="number"
                    handleChange={handleChange}
                    value={data.chol}
                    label="Serum Cholestrol (mg/dl)"
                    required
                  />
                  <FormInput
                    name="fbs"
                    type="number"
                    handleChange={handleChange}
                    value={data.fbs}
                    label="Fasting Blood Sugar > 120 md/dl : 1 = yes, 0 = no"
                    required
                  />
                  <FormInput
                    name="restecg"
                    type="number"
                    handleChange={handleChange}
                    value={data.restecg}
                    label="Resting Electrocardiographic Results (0-2 ,0 = normal)"
                    required
                  />
                  <FormInput
                    name="thalach"
                    type="number"
                    handleChange={handleChange}
                    value={data.thalach}
                    label="Maximum Heart Rate Achieved"
                    required
                  />
                  <FormInput
                    name="exang"
                    type="number"
                    handleChange={handleChange}
                    value={data.exang}
                    label="Exercise Induced Angina (1 = yes, 0 = no)"
                    required
                  />
                  <FormInput
                    name="oldpeak"
                    type="number"
                    handleChange={handleChange}
                    value={data.oldpeak}
                    label="ST Depression Induced by exercise relative to rest (ex - 1.3)"
                    required
                  />
                  <FormInput
                    name="slope"
                    type="number"
                    handleChange={handleChange}
                    value={data.slope}
                    label="Slope of Peak ST Segment (1 = up, 2 = flat, 3 = down)"
                    required
                  />
                  <FormInput
                    name="ca"
                    type="number"
                    handleChange={handleChange}
                    value={data.ca}
                    label="Number of Major Vessels colored by flourosopy (0-3) "
                    required
                  />
                  <FormInput
                    name="thal"
                    type="number"
                    handleChange={handleChange}
                    value={data.thal}
                    label="Thal (3 = normal, 6 = fixed defect, 7 = reversable defect)"
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
    </Suspense>
  );
};

export default Heart;

const SymptomsData = [
  {
    text: "Shortness of breath",
  },
  {
    text: "Racing heartbeat (tachycardia)",
  },
  {
    text: "Slow heartbeat (bradycardia)",
  },
  {
    text: "Dizziness and fatigue",
  },
  {
    text: "Chest pain, chest discomfort (angina)",
  },
  {
    text: "Fainting (syncope) or near fainting",
  },
  {
    text: "Pain in the neck, jaw, throat, upper abdomen or back",
  },
  {
    text: "Pain in the neck, jaw, throat, upper abdomen or back",
  },
  {
    text: "Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed",
  },
];

const RiskData = [
  {
    text: "Stress",
  },
  {
    text: "Obesity",
  },
  {
    text: "Diabetes",
  },
  {
    text: "High blood pressure",
  },
  {
    text: "High blood cholesterol levels",
  },
  {
    text: "Age: Aging increases your risk of heart disease.",
  },
  {
    text: "Sex: Men are generally at greater risk of heart disease.",
  },
  {
    text: "Smoking: Heart attacks are more common in smokers than in nonsmokers.",
  },
  {
    text: "Family history: A family history of heart disease increases your risk of coronary artery disease.",
  },
  {
    text: "Poor diet: A diet that's high in fat, salt, sugar and cholesterol can contribute to the development of heart disease.",
  },
];
