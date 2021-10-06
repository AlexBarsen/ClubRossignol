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

import { useTranslation } from "react-i18next";

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

  const [modalVisibility, setModalVisibility] = useState(false);

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

    toggleModal();

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
    <>
      <Button onClick={toggleModal} buttonType="rentalItem">
        {t("choose")}
      </Button>

      {/* render Modal depending on the state */}
      {modalVisibility && (
        <RentalModalContainer>
          <ModalOverlay></ModalOverlay>

          <ModalContent>
            <Title>{t(name)}</Title>
            <Element>
              <Form onSubmit={handleSubmit}>
                <ContentWrapper>
                  <DateRangeWrapper>
                    {productType === "bike" ? (
                      modalInputs.timePeriod === "per_day" ? (
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
                        name="firstName"
                        type="text"
                        label={t("name")}
                        value={modalInputs.firstName}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        name="lastName"
                        type="text"
                        label={t("surname")}
                        value={modalInputs.lastName}
                        onChange={handleChange}
                        required
                      />

                      <RentalModalSelectTypes
                        productType={productType}
                        adult={adult}
                        onChangeInput={onChangeInput.bind(this)}
                      />
                    </ModalInputs>

                    <RentalModalInfo
                      startDate={dateRange.startDate.toLocaleDateString()}
                      endDate={dateRange.endDate.toLocaleDateString()}
                      days={days}
                      timePeriod={modalInputs.timePeriod}
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
