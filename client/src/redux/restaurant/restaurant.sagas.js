import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertRestaurantMenuSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchRestaurantMenuFailure,
  fetchRestaurantMenuSuccess,
} from "./restaurant.actions";

import { RestaurantActionTypes } from "./restaurant.types";

// * function* = Generator function
export function* fetchRestaurantMenuAsync() {
  try {
    const restaurantRef = firestore.collection("restaurantMenu");

    const snapshot = yield restaurantRef.get();

    const menuMap = yield call(convertRestaurantMenuSnapshotToMap, snapshot);

    yield put(fetchRestaurantMenuSuccess(menuMap));
  } catch (error) {
    yield put(fetchRestaurantMenuFailure(error.message));
  }
}

export function* fetchRestaurantStart() {
  yield takeLatest(
    RestaurantActionTypes.FETCH_RESTAURANT_MENU_START,
    fetchRestaurantMenuAsync
  );
}

export function* restaurantSagas() {
  yield all([call(fetchRestaurantStart)]);
}
