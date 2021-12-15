import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./Orders.scss";

import HistoryIcon from "@mui/icons-material/History";

// import { OrdersContainer, Title } from "./OrdersElements";
import { selectUserOrders } from "../../../../../redux/user/user.selectors";
import Order from "../Order/Order";
import Accordion from "react-bootstrap/Accordion";

const Orders = ({ userOrders }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mb-3 orders-heading">
        <HistoryIcon />
        <span className="h5 ms-2 m-0">{t("order_history")}</span>
      </div>

      {userOrders.map((order) => (
        <Accordion
          className="mb-3 custom-accordion"
          defaultActiveKey="1"
          key={order.orderID}
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
