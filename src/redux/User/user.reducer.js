import userTypes from "./User.Types";

const INITIAL_STATE = {
  currentUser: null,
  passwordResetSuccess: false,
  userError: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userError: [],
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userError: action.payload,
      };
    case userTypes.RESET_USER_SUCCESS:
      return {
        ...state,
        passwordResetSuccess: action.payload,
      };
    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default userReducer;
