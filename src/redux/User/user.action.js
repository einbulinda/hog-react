import { auth, GoogleProvider, handleUserProfile } from "../../firebase/utils";
import userTypes from "./User.Types";

export const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

// Persist user auth status in our App
export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userCredentials) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials,
});

export const userError = (err) => ({
  type: userTypes.USER_ERROR,
  payload: err,
});

export const resetUserStart = (userCredentials) => ({
  type: userTypes.RESET_USER_START,
  payload: userCredentials,
});

export const resetUserSuccess = () => ({
  type: userTypes.RESET_USER_SUCCESS,
  payload: true,
});

export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE,
});

// OLD ACTIONS

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInWithGoogle = () => async (dispatch) => {
  try {
    await auth.signInWithPopup(GoogleProvider).then(() => {
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    });
  } catch (error) {
    // console.log(error);
  }
};

export const logoutUser = () => ({
  type: userTypes.LOGOUT_USER_SUCCESS,
});
