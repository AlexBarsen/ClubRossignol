import { all, call } from "redux-saga/effects";

import { rentalSagas } from "./rental/rental.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { orderSagas } from "./order/order.sagas";
import { restaurantSagas } from "./restaurant/restaurant.sagas";

// * call all sagas into a root saga
export default function* rootSaga() {
  yield all([
    call(rentalSagas),
    call(userSagas),
    call(cartSagas),
    call(orderSagas),
    call(restaurantSagas),
  ]);
}
