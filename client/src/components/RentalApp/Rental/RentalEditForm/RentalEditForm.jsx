import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { DateRange, Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file
import { useTranslation } from "react-i18next";

import { editItem } from "../../../../redux/cart/cart.actions";
import { Button } from "../../Button/ButtonElement";
import RentalEditFormSelects from "../RentalEditFormSelects/RentalEditFormSelects";
import RentalModalInfo from "../RentalFormInfo/RentalFormInfo";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const RentalEditForm = ({ cartItem, editItem }) => {
  useEffect(() => {
    setItem(cartItem);
  }, [cartItem]);

  const { t } = useTranslation();

  const [item, setItem] = useState(cartItem);

  const [modalVisibility, setModalVisibility] = useState(false);

  const inverseDate = (date) => {
    const dates = date.split("/");
    return dates[1] + "/" + dates[0] + "/" + dates[2];
  };

  const initialStartDate = new Date(inverseDate(cartItem.startDate));
  const initialEndDate = new Date(inverseDate(cartItem.endDate));

  const [dateRange, setDateRange] = useState({
    startDate: initialStartDate,
    endDate: initialEndDate,
    key: "selection",
  });

  const [date, setDate] = useState(initialStartDate);

  const oneDay = 24 * 60 * 60 * 1000;
  const days = Math.round(
    Math.abs((dateRange.startDate - dateRange.endDate) / oneDay) + 1
  );

  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = () => {
    setModalVisibility(!modalVisibility);

    if (modalVisibility) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  // * function which updates the state for the "react-select" <Select>
  const onChangeInput = (selected, props) => {
    switch (props.name) {
      case "height":
        setItem({ ...item, height: selected.value });
        break;
      case "weight":
        setItem({ ...item, weight: selected.value });
        break;
      case "shoeSize":
        setItem({ ...item, shoeSize: selected.value });
        break;
      case "experience":
        setItem({ ...item, experience: selected.value });
        break;
      case "sex":
        setItem({ ...item, sex: selected.value });
        break;
      case "timePeriod":
        setItem({ ...item, timePeriod: selected.value });
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setItem({ ...item, [name]: value });
  };

  // * set the state regarding the selected dates by the user
  const handleRangeChange = (newRangeSelection) => {
    const newRange = newRangeSelection.selection;

    setDateRange({ ...newRange });
  };

  const handleSelectDate = (date) => {
    setDate(date);
    setDateRange({ startDate: date, endDate: date, key: "selection" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toggleModal();

    // * pass state into item
    const editedItem = {
      ...item,
      startDate: dateRange.startDate.toLocaleDateString(),
      endDate: dateRange.endDate.toLocaleDateString(),
      days: days,
    };

    editItem(editedItem);

    setItem({
      ...editedItem,
    });
  };

  const defaultValues = {
    height: cartItem.height,
    experience: cartItem.experience,
    sex: cartItem.sex,
    shoeSize: cartItem.shoeSize,
    weight: cartItem.weight,
    timePeriod: cartItem.timePeriod,
  };

  return (
    <Container>
      <h1>{t(item.name)}</h1>

      <Form onSubmit={handleSubmit}>
        <div className="d-flex">
          <div className="">
            {item.productType === "bike" && item.timePeriod !== "1d+" ? (
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

          <div className="d-flex flex-column w-100">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{t("name")}</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First Name"
                value={item.firstName}
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
                value={item.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <RentalEditFormSelects
              defaultValues={defaultValues}
              adult={cartItem.adult}
              productType={cartItem.productType}
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
      />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editItem: (item) => dispatch(editItem(item)),
});

export default connect(null, mapDispatchToProps)(RentalEditForm);
