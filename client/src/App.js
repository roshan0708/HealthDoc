import React from "react";
import { Switch, Route } from "react-router-dom";
import { setCurrentUser } from "./redux/user/actions";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import Header from "./components/common/navbar";
import Footer from "./components/common/footer";
import Home from "./pages/Home";
import Heart from "./pages/Heart";
import Predict from "./pages/Predict";
import Liver from "./pages/Liver";
import Kidney from "./pages/Kidney";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    //store.dispatch(logoutUser());
    // Redirect to login
    window.location.pathname = "/";
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/predict" component={Predict} />
        <Route exact path="/predict/heart" component={Heart} />
        <Route exact path="/predict/liver" component={Liver} />
        <Route exact path="/predict/kidney" component={Kidney} />
      </Switch>
      <Footer />
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
