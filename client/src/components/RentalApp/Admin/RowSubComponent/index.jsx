import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Select from "react-select";

import Button from "react-bootstrap/Button";

import { updateOrderStatusStart } from "../../../../redux/order/order.actions";

import AdminOrderItem from "../AdminOrderItem/index";

import { Container, Table } from "react-bootstrap";

const RowSubComponent = ({ row, updateOrderStatusStart }) => {
  const { t } = useTranslation();

  const { status, orderedItems, orderID } = row.original;

  const [orderStatus, setOrderStatus] = useState(status);

  const handleStatusChange = (selected, props) => {
    setOrderStatus(selected.value);
  };

  const handleStatusUpdate = (orderID, orderStatus) => {
    updateOrderStatusStart(orderID, orderStatus);
  };

  const options = [
    { value: "received", label: t("received") },
    { value: "prepared", label: t("prepared") },
    { value: "complete", label: t("complete") },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      textAlin: "center",
      width: 150,
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      textAlign: "center",
    }),
  };
  return (
    <Container className="d-flex">
      <div style={{ width: "85%" }}>
        <Container className="d-flex justify-content-between align-items-center">
          <Table style={{ border: "1px solid black" }}>
            <thead>
              <tr>
                <th
                  style={{
                    background: "#dedede",
                    borderTop: "1px solid black",
                    borderLeft: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                >
                  Product
                </th>
                <th
                  style={{
                    background: "#dedede",
                    borderTop: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    background: "#dedede",
                    borderTop: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                >
                  Details
                </th>
                <th
                  style={{
                    background: "#dedede",
                    borderTop: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                >
                  Dates
                </th>
                {/* <th>Price</th> */}
              </tr>
            </thead>
            {orderedItems.map((item) => (
              <AdminOrderItem
                key={item.id}
                item={item}
                status={row.original.status}
              />
            ))}
          </Table>
        </Container>
      </div>

      <div
        style={{ width: "15%" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        {status !== "complete" ? (
          <>
            <Select
              className="mb-3"
              defaultValue={{
                value: orderStatus,
                label: t(orderStatus),
              }}
              onChange={handleStatusChange}
              styles={customStyles}
              options={options}
              isSearchable={false}
            />
            <div>
              <Button
                buttonType="status"
                onClick={() => handleStatusUpdate(orderID, orderStatus)}
              >
                Change Status
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateOrderStatusStart: (orderID, orderStatus) =>
    dispatch(updateOrderStatusStart({ orderID, orderStatus })),
});

export default connect(null, mapDispatchToProps)(RowSubComponent);
