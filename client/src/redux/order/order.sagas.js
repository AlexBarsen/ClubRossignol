import { takeLatest, put, call, all } from "@redux-saga/core/effects";

import {
  firestore,
  convertOrdersSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchOrdersSuccess, fetchOrdersFailure } from "./order.actions";

import OrderActionTypes from "./order.types";

export function* fetchOrdersAsync() {
  try {
    const ordersRef = firestore.collection("orders");

    const ordersSnapshot = yield ordersRef.get();

    const ordersMap = yield call(convertOrdersSnapshotToMap, ordersSnapshot);

    yield put(fetchOrdersSuccess(ordersMap));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}

export function* fetchOrdersStart() {
  yield takeLatest(OrderActionTypes.FETCH_ORDERS_START, fetchOrdersAsync);
}

export function* orderSagas() {
  yield all([call(fetchOrdersStart)]);
}
