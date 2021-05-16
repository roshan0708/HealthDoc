import React, { lazy, Suspense } from "react";
import Loader from "../components/common/loader";
const PredictHome = lazy(() => import("../components/predict/home"));

const Predict = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PredictHome />
    </Suspense>
  );
};

export default Predict;
