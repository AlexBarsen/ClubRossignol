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

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import FormInput from "../../FormInput/index";

import { FiEdit } from "react-icons/fi";

const EditModal = ({ cartItem, editItem }) => {
  const [item, setItem] = useState(cartItem);

  useEffect(() => {
    setItem(cartItem);
  }, [cartItem]);

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

  // * get date in DD/MM/YYYY format
  const transformDate = (date) => {
    const startDay = new Date(date).getDate();
    const startMonth = new Date(date).getMonth() + 1;
    const startYear = new Date(date).getFullYear();
    return startDay + "/" + startMonth + "/" + startYear;
  };

  const oneDay = 24 * 60 * 60 * 1000;
  const startDate = transformDate(dateRange.startDate);
  const endDate = transformDate(dateRange.endDate);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    toggleModal();

    // * pass state into item
    const editedItem = {
      ...item,
      startDate: startDate,
      endDate: endDate,
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
  };

  return (
    <>
      <FiEdit onClick={toggleModal} size={25} />

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
                    <DateRange
                      className="modal__date-range"
                      editableDateInputs={false}
                      onInit={handleRangeChange}
                      ranges={[dateRange]}
                      onChange={handleRangeChange}
                      minDate={
                        new Date(new Date().setDate(new Date().getDate() + 1))
                      }
                      showDateDisplay={true}
                    />
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
                      startDate={startDate}
                      endDate={endDate}
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
