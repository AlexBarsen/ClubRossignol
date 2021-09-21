import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  firestore,
  convertOrdersSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
  fetchUserOrdersSuccess,
  fetchUserOrdersFailure,
} from "./user.actions";
import { UserActionTypes } from "./user.types";

// * other functionality
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument, // * returns user reference
      userAuth,
      additionalData
    );

    const userSnapshot = yield userRef.get(); // * get userSnapshot

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser(); // * returns null or obj

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth); // * return userSnapshot
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// * signUp
export function* emailSignUp({
  payload: { email, password, firstName, lastName, phone },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(
      signUpSuccess({ user, additionalData: { firstName, lastName, phone } })
    );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

// * signIn
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user); // *return userSnapshot
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// *signOut
export function* signOut() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// * generator functions catch the dispatches and fire other functions*
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, emailSignUp);
}

// * SignIn the user after SignUp
export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}
// * Orders sagas

export function* fetchUserOrdersAsync({ payload: { currentUser } }) {
  if (currentUser) {
    const userID = currentUser.id;
    try {
      const ordersRef = firestore.collection("orders");

      const ordersSnapshot = yield ordersRef
        .where("userID", "==", userID)
        .get();

      const ordersMap = yield call(convertOrdersSnapshotToMap, ordersSnapshot);

      yield put(fetchUserOrdersSuccess(ordersMap));
    } catch (error) {
      yield put(fetchUserOrdersFailure(error));
    }
  } else return;
}

export function* fetchUserOrdersStart() {
  yield takeLatest(
    UserActionTypes.FETCH_USER_ORDERS_START,
    fetchUserOrdersAsync
  );
}

// * export userSagas functions()
export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onCheckUserSession),
    call(fetchUserOrdersStart),
  ]);
}
