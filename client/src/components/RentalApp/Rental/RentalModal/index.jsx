import React, { useState } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { DateRange, Calendar } from "react-date-range";

import {
  RentalModalContainer,
  ModalOverlay,
  ModalContent,
  Title,
  Element,
  DateRangeWrapper,
  ContentWrapper,
  WrapperRight,
  ButtonContainer,
  ModalInputs,
  Form,
  CloseButtonContainer,
} from "./RentalModalElements";

import RentalModalSelectTypes from "../RentalModalSelectTypes/index";

import RentalModalInfo from "../RentalModalInfo/index";

import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import { addItem } from "../../../../redux/cart/cart.actions";

import FormInput from "../../FormInput/index";
import { Button } from "../../Button/ButtonElement";

const RentalModal = ({ addItem, item }) => {
  const { name, price, productType, adult, eBike, icon } = item;

  const [modalInputs, setModalInputs] = useState({
    firstName: "",
    lastName: "",
    durata: "",
  });

  const [modalVisibility, setModalVisibility] = useState(false);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    key: "selection",
  });

  const [date, setDate] = useState(null);

  // * get date in DD/MM/YYYY format
  const transformDate = (date) => {
    const startDay = date.getDate();
    const startMonth = date.getMonth() + 1;
    const startYear = date.getFullYear();
    return startDay + "/" + startMonth + "/" + startYear;
  };

  // * custom configuration for the Date
  const oneDay = 24 * 60 * 60 * 1000;
  const startDate = transformDate(dateRange.startDate);
  const endDate = transformDate(dateRange.endDate);
  const days =
    Math.round(Math.abs((dateRange.endDate - dateRange.startDate) / oneDay)) +
    1;

  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = () => {
    setModalVisibility(!modalVisibility);

    if (modalVisibility) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setModalInputs({ ...modalInputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toggleModal();

    if (productType === "bike") {
      const orderItem = {
        icon: icon,
        name: name,
        price: modalInputs.durata,
        id: uuid(),
        productType: productType,
        adult: adult,
        eBike: eBike ? eBike : null,
        ...modalInputs,
        startDate: startDate,
        endDate: endDate,
        days: `${days} (${modalInputs.durata})`,
      };

      addItem(orderItem);

      setModalInputs({
        firstName: "",
        lastName: "",
      });
    } else {
      const orderItem = {
        icon: icon,
        name: name,
        price: price,
        id: uuid(),
        productType: productType,
        adult: adult,
        ...modalInputs,
        startDate: startDate,
        endDate: endDate,
        days: days,
      };

      addItem(orderItem);

      setModalInputs({
        firstName: "",
        lastName: "",
      });
    }
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
      case "durata":
        setModalInputs({ ...modalInputs, durata: selected.value });
        break;
      default:
        break;
    }
  };

  const handleSelect = (date) => {
    setDate(date);
  };

  // * set the state regarding the selected dates by the user
  const handleRangeChange = (newRangeSelection) => {
    const newRange = newRangeSelection.selection;

    setDateRange({ ...newRange });
  };

  const { firstName, lastName } = modalInputs;

  return (
    <>
      <Button onClick={toggleModal} buttonType="rentalItem">
        ALEGE
      </Button>

      {/* render Modal depending on the state */}
      {modalVisibility && (
        <RentalModalContainer>
          <ModalOverlay></ModalOverlay>

          <ModalContent>
            <Title>{item.name}</Title>
            <Element>
              <Form onSubmit={handleSubmit}>
                <ContentWrapper>
                  <DateRangeWrapper>
                    {productType === "bike" ? (
                      modalInputs.durata === "1 Zi / Day" ? (
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
                          onChange={handleSelect}
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
                        // className="modal__date-range"
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
                        value={firstName}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        className="modal__rental-info--input"
                        name="lastName"
                        type="text"
                        label="Prenume"
                        value={lastName}
                        onChange={handleChange}
                        required
                      />

                      <RentalModalSelectTypes
                        productType={productType}
                        adult={adult}
                        eBike={eBike}
                        onChangeInput={onChangeInput.bind(this)}
                      />
                    </ModalInputs>

                    <RentalModalInfo
                      startDate={startDate}
                      endDate={endDate}
                      days={days}
                    />

                    <ButtonContainer>
                      <Button buttonType="modal" type="submit">
                        ADAUGA IN COS
                      </Button>
                    </ButtonContainer>
                  </WrapperRight>
                </ContentWrapper>
              </Form>
            </Element>
            <CloseButtonContainer>
              <Button buttonType="close" onClick={toggleModal}>
                ❌
              </Button>
            </CloseButtonContainer>
          </ModalContent>
        </RentalModalContainer>
      )}
    </>
  );
};

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(RentalModal);
