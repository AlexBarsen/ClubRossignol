import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { editItem } from "../../../../redux/cart/cart.actions";

import EditModalSelectTypes from "../RentalEditModalSelectTypes/index";

import RentalModalInfo from "../RentalModalInfo/index";

import {
  EditModalContainer,
  ModalOverlay,
  ModalContent,
  Title,
  Element,
  DateRangeWrapper,
  ContentWrapper,
  WrapperRight,
  ModalInputs,
  Form,
  ButtonContainer,
  CloseButtonContainer,
} from "./RentalEditModalElements";

import { Button } from "../../Button/ButtonElement";

import { DateRange, Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import FormInput from "../../FormInput/index";

const EditModal = ({ cartItem, editItem }) => {
  useEffect(() => {
    setItem(cartItem);
  }, [cartItem]);

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
    <>
      <Button buttonType="close" onClick={toggleModal}>
        ✏️
      </Button>

      {/* render Modal depending on the state */}
      {modalVisibility && (
        <EditModalContainer>
          <ModalOverlay></ModalOverlay>
          <ModalContent>
            <Title>{item.name}</Title>

            <Element>
              <Form onSubmit={handleSubmit}>
                <ContentWrapper>
                  <DateRangeWrapper>
                    {item.productType === "bike" ? (
                      item.timePeriod === "days" ? (
                        <DateRange
                          editableDateInputs={false}
                          onInit={handleRangeChange}
                          ranges={[dateRange]}
                          onChange={handleRangeChange}
                          minDate={
                            new Date(
                              new Date().setDate(new Date().getDate() + 1)
                            )
                          }
                          showDateDisplay={false}
                        />
                      ) : (
                        <Calendar
                          onChange={handleSelectDate}
                          editableDateInputs={false}
                          date={date}
                          minDate={
                            new Date(
                              new Date().setDate(new Date().getDate() + 1)
                            )
                          }
                          showDateDisplay={false}
                        />
                      )
                    ) : (
                      <DateRange
                        editableDateInputs={false}
                        onInit={handleRangeChange}
                        ranges={[dateRange]}
                        onChange={handleRangeChange}
                        minDate={
                          new Date(new Date().setDate(new Date().getDate() + 1))
                        }
                        showDateDisplay={false}
                      />
                    )}
                  </DateRangeWrapper>

                  <WrapperRight>
                    <ModalInputs>
                      <FormInput
                        className="modal__rental-info--input"
                        name="firstName"
                        type="text"
                        label="Nume"
                        value={item.firstName}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        className="modal__rental-info--input"
                        name="lastName"
                        type="text"
                        label="Prenume"
                        value={item.lastName}
                        onChange={handleChange}
                        required
                      />

                      <EditModalSelectTypes
                        defaultValues={defaultValues}
                        adult={cartItem.adult}
                        productType={cartItem.productType}
                        onChangeInput={onChangeInput.bind(this)}
                      />
                    </ModalInputs>

                    <RentalModalInfo
                      startDate={dateRange.startDate.toLocaleDateString()}
                      endDate={dateRange.endDate.toLocaleDateString()}
                      days={days}
                    />

                    <ButtonContainer>
                      <Button type="submit" buttonType="modal">
                        EDITEAZA
                      </Button>
                    </ButtonContainer>
                  </WrapperRight>
                </ContentWrapper>
              </Form>
            </Element>
            <CloseButtonContainer>
              <Button onClick={toggleModal} buttonType="close">
                ❌
              </Button>
            </CloseButtonContainer>
          </ModalContent>
        </EditModalContainer>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editItem: (item) => dispatch(editItem(item)),
});

export default connect(null, mapDispatchToProps)(EditModal);
