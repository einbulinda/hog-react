import { auth, handleUserProfile } from "../../firebase/utils";
import userTypes from "./User.Types";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
