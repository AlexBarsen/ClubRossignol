import React from "react";

import {
  RentalItemContainer,
  Title,
  Footer,
  Price,
} from "./RentalItemElements";

import RentalModal from "../RentalModal";

const RentalItem = ({ item }) => {
  const { name, price } = item;
  return (
    <>
      <RentalItemContainer>
        <Title>{name}</Title>
        <Footer>
          <Price>{price} RON / ZI</Price>
          <RentalModal item={item} />
        </Footer>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
