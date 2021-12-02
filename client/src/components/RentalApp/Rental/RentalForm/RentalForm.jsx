import React, { useState } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { DateRange, Calendar } from "react-date-range";

import RentalFormSelects from "../RentalFormSelects/RentalFormSelects";

import RentalModalInfo from "../RentalFormInfo/RentalFormInfo";

import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import { addItem } from "../../../../redux/cart/cart.actions";

import { useTranslation } from "react-i18next";

import { Container, Form, Button } from "react-bootstrap";

const RentalForm = ({ addItem, item, closeModal }) => {
  const { t } = useTranslation();

  const {
    name,
    price = null,
    type,
    adult = null,
    images,
    prices = null,
  } = item;

  const [modalInputs, setModalInputs] = useState({
    firstName: "",
    lastName: "",
    timePeriod: null,
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

    if (type === "bike") {
      const orderItem = {
        images: images,
        name: name,
        price:
          modalInputs.timePeriod === "2h"
            ? prices[0]
            : modalInputs.timePeriod === "4h"
            ? prices[1]
            : prices[2],
        id: uuid(),
        type: type,
        ...modalInputs,
        startDate: dateRange.startDate.toLocaleDateString(),
        endDate: dateRange.endDate.toLocaleDateString(),
        days: `${days}`,
      };

      addItem(orderItem);
    } else {
      const orderItem = {
        images: images,
        name: name,
        price: price,
        id: uuid(),
        type: type,
        ...modalInputs,
        startDate: dateRange.startDate.toLocaleDateString(),
        endDate: dateRange.endDate.toLocaleDateString(),
        days: days,
      };

      addItem(orderItem);
    }

    closeModal();

    setModalInputs({
      firstName: "",
      lastName: "",
      timePeriod: "",
    });
  };

  return (
    <Container className="p-0">
      <Form onSubmit={handleSubmit}>
        <div className="d-flex">
          <div className="me-2">
            {type === "bike" && modalInputs.timePeriod !== "1d+" ? (
              <Calendar
                onChange={handleSelectDate}
                editableDateInputs={false}
                date={date}
                minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                showDateDisplay={false}
              />
            ) : (
              <DateRange
                editableDateInputs={false}
                onInit={handleRangeChange}
                ranges={[dateRange]}
                onChange={handleRangeChange}
                minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                showDateDisplay={false}
              />
            )}
          </div>

          <div className="d-flex flex-column w-100 justify-content-center">
            <div className="d-flex p-0 mb-3 justify-content-between">
              <Form.Group style={{ width: "48%" }}>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder={t("last_name")}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group style={{ width: "48%" }}>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder={t("first_name")}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            <RentalFormSelects
              type={type}
              adult={adult}
              onChangeInput={onChangeInput.bind(this)}
            />

            <Button className="mt-3" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>

      <RentalModalInfo
        startDate={dateRange.startDate.toLocaleDateString()}
        endDate={dateRange.endDate.toLocaleDateString()}
        days={days}
        productName={name}
        timePeriod={modalInputs.timePeriod}
      />
    </Container>
  );
};

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(RentalForm);
