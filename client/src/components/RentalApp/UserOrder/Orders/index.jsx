import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { OrdersContainer, OrderContainer, Title } from "./OrdersElements";
import { selectUserOrders } from "../../../../redux/user/user.selectors";
import Order from "../Order/index";

const Orders = ({ userOrders }) => {
  const { t } = useTranslation();
  return (
    <>
      <OrdersContainer>
        <Title>{t("order_history")}:</Title>
        <OrderContainer>
          {userOrders.map((order) => (
            <Order key={order.orderID} order={order} />
          ))}
        </OrderContainer>
      </OrdersContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userOrders: selectUserOrders,
});

export default connect(mapStateToProps)(Orders);
