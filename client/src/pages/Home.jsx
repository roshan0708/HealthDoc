import React, { lazy, Suspense } from "react";
import Loader from "../components/common/loader";
const Cover = lazy(() => import("../components/home/cover"));
const About = lazy(() => import("../components/home/about"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Cover />
      <About />
    </Suspense>
  );
};

export default Home;
