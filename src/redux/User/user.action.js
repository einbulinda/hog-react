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

export const signUpUserError = (err) => ({
  type: userTypes.SIGN_UP_USER_ERROR,
  payload: err,
});

// OLD ACTIONS

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

// export const registerUser =
//   ({ displayName, email, password, confirmPassword }) =>
//   async (dispatch) => {};

export const resetUser =
  ({ email }) =>
  async (dispatch) => {
    try {
      const config = {
        url: "http://localhost:3000/login",
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          dispatch({
            type: userTypes.RESET_USER_SUCCESS,
            payload: true,
          });
        })
        .catch(() => {
          const err = ["Email not registered. Lets register!"];
          dispatch({
            type: userTypes.RESET_USER_ERROR,
            payload: err,
          });
        });
    } catch (error) {
      console.log(error.message);
    }
  };

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
