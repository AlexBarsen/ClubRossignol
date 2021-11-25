import { takeLatest, put, call, all } from "@redux-saga/core/effects";

import {
  firestore,
  convertOrdersSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchOrdersSuccess,
  fetchOrdersFailure,
  updateOrderStatusFailure,
  updateOrderStatusSuccess,
} from "./order.actions";

import OrderActionTypes from "./order.types";

export function* fetchOrdersAsync() {
  try {
    const ordersRef = firestore
      .collection("orders")
      .where("clientIp", "!=", null);

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

export function* updateOrderStatusAsync({ payload: { orderID, orderStatus } }) {
  try {
    const orderRef = yield firestore.doc(`orders/${orderID}`);

    const orderSnapshot = yield orderRef.get();

    const orderData = orderSnapshot.data();

    yield orderRef.set({
      ...orderData,
      status: orderStatus,
    });

    // const orderIDAndStatus = { orderID: orderID, status: status };

    yield put(updateOrderStatusSuccess({ orderID, orderStatus }));
  } catch (error) {
    yield put(updateOrderStatusFailure(error));
  }
}

export function* updateOrderStatusStart() {
  yield takeLatest(
    OrderActionTypes.UPDATE_ORDER_STATUS_START,
    updateOrderStatusAsync
  );
}

export function* orderSagas() {
  yield all([call(fetchOrdersStart), call(updateOrderStatusStart)]);
}
