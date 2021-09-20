import React, { useState } from "react";

import { connect } from "react-redux";

import Select from "react-select";

import { Button } from "../../Button/ButtonElement";

import { updateOrderStatusStart } from "../../../../redux/order/order.actions";

import AdminOrderItem from "../AdminOrderItem/index";

import { useTranslation } from "react-i18next";

import {
  Wrapper,
  AdminOrderedItems,
  SelectContainer,
  ButtonContainer,
} from "./RowSubComponentElements";

const RowSubComponent = ({ row, updateOrderStatusStart }) => {
  const { status, orderedItems, orderID } = row.original;

  const [orderStatus, setOrderStatus] = useState(status);

  const handleStatusChange = (selected, props) => {
    setOrderStatus(selected.value);
  };

  const handleStatusUpdate = (orderID, orderStatus) => {
    updateOrderStatusStart(orderID, orderStatus);
  };

  const { t } = useTranslation();

  const options = [
    { value: "received", label: t("received") },
    { value: "prepared", label: t("prepared") },
    { value: "complete", label: t("complete") },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "2rem",
      textAlin: "center",
      width: 150,
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "2rem",
      textAlign: "center",
    }),
  };
  return (
    <Wrapper>
      <AdminOrderedItems>
        {orderedItems.map((item) => (
          <AdminOrderItem
            key={item.id}
            item={item}
            status={row.original.status}
          />
        ))}
      </AdminOrderedItems>

      <SelectContainer>
        {status !== "complete" ? (
          <>
            <Select
              defaultValue={{
                value: orderStatus,
                label: t(orderStatus),
              }}
              onChange={handleStatusChange}
              styles={customStyles}
              options={options}
              isSearchable={false}
            />
            <ButtonContainer>
              <Button
                buttonType="status"
                onClick={() => handleStatusUpdate(orderID, orderStatus)}
              >
                Change Status
              </Button>
            </ButtonContainer>
          </>
        ) : null}
      </SelectContainer>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateOrderStatusStart: (orderID, orderStatus) =>
    dispatch(updateOrderStatusStart({ orderID, orderStatus })),
});

export default connect(null, mapDispatchToProps)(RowSubComponent);
