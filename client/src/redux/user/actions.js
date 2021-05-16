import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { UserActionTypes } from "./types";

// Register User
export const registerUser = (userData, callback) => (dispatch) => {
  axios
    .post("/api/register", userData)
    .then((res) => {
      dispatch(registerSuccess());
      callback();
      toast.success("Registered Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      callback();
      toast.error(err.response.data.message.msgBody + " 🤥", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

// Login - get user token
export const loginUser = (userData, callback) => (dispatch) => {
  axios
    .post("/api/login", userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(loginSuccess(res.data));
      callback();
      toast.success("Logged In Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      callback();
      toast.error(err.response.data.message.msgBody + " 🤥", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(removeUser());
};

export const removeUser = () => {
  return {
    type: UserActionTypes.LOGOUT_USER,
  };
};

export const setCurrentUser = (decoded) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};

export const loginStart = () => ({
  type: UserActionTypes.LOGIN_PENDING,
});

export const loginSuccess = (data) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: data,
});

export const registerStart = () => ({
  type: UserActionTypes.REGISTER_PENDING,
});

export const registerSuccess = (data) => ({
  type: UserActionTypes.REGISTER_SUCCESS,
});
