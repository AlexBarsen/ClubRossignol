import React, { useState } from "react";

import { connect } from "react-redux";

import Select from "react-select";

import { Button } from "../../Button/ButtonElement";

import { updateOrderStatusStart } from "../../../../redux/order/order.actions";

import AdminOrderItem from "../AdminOrderItem/index";

import {
  Wrapper,
  AdminOrderedItems,
  SelectContainer,
} from "./RowSubComponentElements";

const RowSubComponent = ({ row, updateOrderStatusStart }) => {
  const { status, orderedItems, orderID } = row.original;
  console.log(status);
  const [orderStatus, setOrderStatus] = useState(status);

  const handleStatusChange = (selected, props) => {
    setOrderStatus(selected.value);
  };

  const handleStatusUpdate = (orderID, orderStatus) => {
    updateOrderStatusStart(orderID, orderStatus);
  };

  const options = [
    { value: "recevied", label: "received" },
    { value: "prepared", label: "prepared" },
    { value: "complete", label: "complete" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "2rem",
      textAlin: "center",
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "2rem",
      textAlign: "center",
    }),
  };
  return (
    <>
      <Wrapper>
        <AdminOrderedItems>
          {orderedItems.map((item) => (
            <>
              <AdminOrderItem
                key={item.id}
                item={item}
                status={row.original.status}
              />
            </>
          ))}
        </AdminOrderedItems>

        <SelectContainer>
          {status !== "complete" ? (
            <>
              <Select
                defaultValue={{
                  value: orderStatus,
                  label: orderStatus,
                }}
                onChange={handleStatusChange}
                styles={customStyles}
                options={options}
                isSearchable={false}
              />
              <Button onClick={() => handleStatusUpdate(orderID, orderStatus)}>
                Change Status
              </Button>
            </>
          ) : null}
        </SelectContainer>
      </Wrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateOrderStatusStart: (orderID, orderStatus) =>
    dispatch(updateOrderStatusStart({ orderID, orderStatus })),
});

export default connect(null, mapDispatchToProps)(RowSubComponent);
