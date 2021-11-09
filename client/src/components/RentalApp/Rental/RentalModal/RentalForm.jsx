import React, { useState } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { DateRange, Calendar } from "react-date-range";

import RentalModalSelectTypes from "../RentalModalSelectTypes/index";

import RentalModalInfo from "../RentalModalInfo/index";

import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import { addItem } from "../../../../redux/cart/cart.actions";

import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RentalModal = ({ addItem, item }) => {
  const { t } = useTranslation();

  const {
    name,
    price = null,
    productType,
    adult = null,
    icon,
    prices = null,
  } = item;

  const [modalInputs, setModalInputs] = useState({
    firstName: "",
    lastName: "",
    timePeriod: "",
  });

  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    key: "selection",
  });

  const [date, setDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  const oneDay = 24 * 60 * 60 * 1000;
  const days =
    Math.round(Math.abs((dateRange.endDate - dateRange.startDate) / oneDay)) +
    1;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setModalInputs({ ...modalInputs, [name]: value });
  };

  // * function which updates the state for the "react-select" <Select>
  const onChangeInput = (selected, props) => {
    switch (props.name) {
      case "height":
        setModalInputs({ ...modalInputs, height: selected.value });
        break;
      case "weight":
        setModalInputs({ ...modalInputs, weight: selected.value });
        break;
      case "shoeSize":
        setModalInputs({ ...modalInputs, shoeSize: selected.value });
        break;
      case "experience":
        setModalInputs({ ...modalInputs, experience: selected.value });
        break;
      case "sex":
        setModalInputs({ ...modalInputs, sex: selected.value });
        break;
      case "timePeriod":
        setModalInputs({ ...modalInputs, timePeriod: selected.value });
        break;
      default:
        break;
    }
  };

  const handleSelectDate = (date) => {
    setDate(date);
    setDateRange({ startDate: date, endDate: date, key: "selection" });
  };

  // * set the state regarding the selected dates by the user
  const handleRangeChange = (newRangeSelection) => {
    const newRange = newRangeSelection.selection;

    setDateRange({ ...newRange });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (productType === "bike") {
      const orderItem = {
        icon: icon,
        name: name,
        price:
          modalInputs.timePeriod === "2h"
            ? prices[0]
            : modalInputs.timePeriod === "4h"
            ? prices[1]
            : prices[2],
        id: uuid(),
        productType: productType,
        ...modalInputs,
        startDate: dateRange.startDate.toLocaleDateString(),
        endDate: dateRange.endDate.toLocaleDateString(),
        days: `${days}`,
      };

      addItem(orderItem);
    } else {
      const orderItem = {
        icon: icon,
        name: name,
        price: price,
        id: uuid(),
        productType: productType,
        ...modalInputs,
        startDate: dateRange.startDate.toLocaleDateString(),
        endDate: dateRange.endDate.toLocaleDateString(),
        days: days,
      };

      addItem(orderItem);
    }

    setModalInputs({
      firstName: "",
      lastName: "",
      timePeriod: "",
    });
  };

  return (
    <Container>
      <h1>{t(name)}</h1>

      <Form onSubmit={handleSubmit}>
        <div className="d-flex">
          <div className="">
            <DateRange
              editableDateInputs={false}
              onInit={handleRangeChange}
              ranges={[dateRange]}
              onChange={handleRangeChange}
              minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
              showDateDisplay={false}
            />
          </div>

          <div className="d-flex flex-column w-100">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("name")}</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("surname")}</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <RentalModalSelectTypes
              productType={productType}
              adult={adult}
              onChangeInput={onChangeInput.bind(this)}
            />
          </div>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <RentalModalInfo
        startDate={dateRange.startDate.toLocaleDateString()}
        endDate={dateRange.endDate.toLocaleDateString()}
        days={days}
        timePeriod={modalInputs.timePeriod}
      />
    </Container>
  );
};

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(RentalModal);
