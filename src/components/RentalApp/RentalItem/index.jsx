import React from "react";

import {
  RentalItemContainer,
  Title,
  Icon,
  Footer,
  Price,
} from "./RentalItemElements";

import RentalModal from "../RentalModal";

const RentalItem = ({ item }) => {
  const { name, price, icon } = item;
  return (
    <>
      <RentalItemContainer>
        <Title>{name}</Title>
        <Icon src={icon} alt="Icon" />
        <Footer>
          <Price>{price} RON / ZI</Price>
          <RentalModal item={item} />
        </Footer>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
