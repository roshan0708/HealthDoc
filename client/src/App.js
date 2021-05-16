import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import { setCurrentUser, logoutUser } from "./redux/user/actions";
import { ToastContainer } from "react-toastify";
import Loader from "./components/common/loader";
import PrivateRoute from "./hoc/privateRoute";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import Header from "./components/common/navbar";
import Footer from "./components/common/footer";

const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Heart = lazy(() => import("./pages/Heart"));
const Predict = lazy(() => import("./pages/Predict"));
const Liver = lazy(() => import("./pages/Liver"));
const Kidney = lazy(() => import("./pages/Kidney"));

const App = () => {
  let location = useLocation();
  let dispatch = useDispatch();

  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      dispatch(logoutUser());
      // Redirect to login
      window.location.pathname = "/";
    }
  }
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Register} />
          <PrivateRoute exact path="/predict" component={Predict} />
          <PrivateRoute exact path="/predict/heart" component={Heart} />
          <PrivateRoute exact path="/predict/liver" component={Liver} />
          <PrivateRoute exact path="/predict/kidney" component={Kidney} />
        </Switch>
      </Suspense>
      {location.pathname === "/predict" ? null : location.pathname ===
        "/auth" ? null : (
        <Footer />
      )}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
