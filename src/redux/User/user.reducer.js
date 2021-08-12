import userTypes from "./User.Types";

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  registerUserError: [],
  resetUserSuccess: false,
  resetUserError: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case userTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserSuccess: action.payload,
      };
    case userTypes.REGISTER_USER_ERROR:
      return {
        ...state,
        registerUserError: action.payload,
      };
    case userTypes.RESET_USER_SUCCESS:
      return {
        ...state,
        resetUserSuccess: action.payload,
      };
    case userTypes.RESET_USER_ERROR:
      return {
        ...state,
        resetUserError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
