import React, { lazy, Suspense } from "react";
import Loader from "../components/common/loader";
const Content = lazy(() => import("../components/register/content"));

const Register = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Content />
    </Suspense>
  );
};

export default Register;
