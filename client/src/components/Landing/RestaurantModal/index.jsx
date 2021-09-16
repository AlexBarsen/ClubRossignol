import React, { useState } from "react";

import {
  RestaurantMenuModalContainer,
  ModalOverlay,
  ModalContent,
  ButtonContainer,
} from "./RestaurantModalElements";

import { Button } from "../Button/ButtonElement";

import RestaurantPage from "../../../pages/Restaurant/index";

const RestaurantModal = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);

    if (modalVisibility) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <>
      <Button onClick={toggleModal}>Meniu</Button>

      {modalVisibility && (
        <RestaurantMenuModalContainer>
          <ModalOverlay></ModalOverlay>

          <ModalContent>
            <RestaurantPage />
            <ButtonContainer>
              <Button onClick={toggleModal}>close</Button>
            </ButtonContainer>
          </ModalContent>
        </RestaurantMenuModalContainer>
      )}
    </>
  );
};
export default RestaurantModal;
