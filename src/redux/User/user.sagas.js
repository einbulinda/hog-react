import { takeLatest, call, all, put } from "@redux-saga/core/effects";
import {
  auth,
  GoogleProvider,
  handleUserProfile,
  getCurrentUser,
} from "../../firebase/utils";
import userTypes from "./User.Types";
import { signInSuccess } from "./user.action";

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(handleUserProfile, { userAuth: user });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    // console.log(error);
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    //sign in user
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);

    // yield put();

    // dispatch({
    //   type: userTypes.SIGN_IN_SUCCESS,
    //   payload: true,
    // });
  } catch (error) {
    console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    //   restore redux store user auth state
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    // console.log(error)
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export default function* userSaga() {
  yield all([call(onEmailSignInStart), call(onCheckUserSession)]);
}
