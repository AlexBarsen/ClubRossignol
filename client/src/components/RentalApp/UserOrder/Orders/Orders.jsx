import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import { OrdersContainer, Title } from "./OrdersElements";
import { selectUserOrders } from "../../../../redux/user/user.selectors";
import Order from "../Order/Order";
import Accordion from "react-bootstrap/Accordion";

const Orders = ({ userOrders }) => {
  console.log(userOrders);
  const { t } = useTranslation();
  return (
    <div>
      <div className="h4">{t("order_history")}:</div>

      {userOrders.map((order) => (
        <Accordion
          className="mb-3"
          defaultActiveKey="1"
          key={order.orderID}
          style={{ width: "55rem" }}
        >
          <Order
            key={order.orderID}
            order={order}
            orderID={order.orderNumber}
          />
        </Accordion>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userOrders: selectUserOrders,
});

export default connect(mapStateToProps)(Orders);
