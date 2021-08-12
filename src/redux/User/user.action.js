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
// OLD ACTIONS

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

// export const signInUser =
//   ({ email, password }) =>
//   async (dispatch) => {

//   };

export const registerUser =
  ({ displayName, email, password, confirmPassword }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      const err = ["Passwords provided do not match."];
      dispatch({
        type: userTypes.REGISTER_USER_ERROR,
        payload: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      dispatch({
        type: userTypes.REGISTER_USER_SUCCESS,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
