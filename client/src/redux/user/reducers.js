import { UserActionTypes } from "./types";

const INITIAL_STATE = {
  isAuthenticated: false,
  token: null,
  currentUser: {},
  registerPending: false,
  loginPending: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case UserActionTypes.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        currentUser: {},
      };
    case UserActionTypes.LOGIN_PENDING:
      return {
        ...state,
        loginPending: true,
      };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        currentUser: action.payload.data,
        loginPending: false,
      };
    case UserActionTypes.REGISTER_PENDING:
      return {
        ...state,
        registerPending: true,
      };
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerPending: false,
      };
    default:
      return state;
  }
};

export default userReducer;
