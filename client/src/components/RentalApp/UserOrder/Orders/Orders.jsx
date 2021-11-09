import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { OrdersContainer, Title } from "./OrdersElements";
import { selectUserOrders } from "../../../../redux/user/user.selectors";
import Order from "../Order/Order";
import Accordion from "react-bootstrap/Accordion";

const Orders = ({ userOrders }) => {
  const { t } = useTranslation();
  return (
    <>
      <OrdersContainer>
        <Title>{t("order_history")}:</Title>

        {userOrders.map((order) => (
          // <Order key={order.orderID} order={order} />
          <Accordion defaultActiveKey="0" key={order.orderID}>
            <Order key={order.orderID} order={order} orderID={order.orderID} />
          </Accordion>
        ))}
      </OrdersContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userOrders: selectUserOrders,
});

export default connect(mapStateToProps)(Orders);
