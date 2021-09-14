import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertRestaurantMenuSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchRestaurantMenuFailure,
  fetchRestaurantMenuSuccess,
} from "./restaurant.actions";
import RestaurantActionTypes from "./restaurant.types";

// * function* = Generator function
export function* fetchRestaurantMenuAsync() {
  // * put it insde "try catch" to catch the error if the fetch fails
  try {
    // * reference to collection
    const restaurantRef = firestore.collection("restaurant");

    // * yield .get() get's back at the const value that we set it
    // * no .then() required
    const snapshot = yield restaurantRef.get();

    // * call() = takes as it's 1st argument the function/method
    // *                    the 2nd arguments are the parameters passed into the ()
    // * = convertRentalsSnapshotToMap(snapshot)
    const rentalsMap = yield call(convertRestaurantMenuSnapshotToMap, snapshot);

    // * put() = dispatch() in Redux Saga, has to be yielded
    yield put(fetchRestaurantMenuSuccess(rentalsMap));
  } catch (error) {
    yield put(fetchRestaurantMenuFailure(error.message));
  }
}

// * generator () calling another generator () insde it
export function* fetchRentalsStart() {
  yield takeLatest(
    RestaurantActionTypes.FETCH_RENTALS_START,
    fetchRestaurantMenuAsync
  );
}

export function* rentalSagas() {
  yield all([call(fetchRentalsStart)]);
}
