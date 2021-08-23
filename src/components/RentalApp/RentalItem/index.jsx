import React from "react";

import {
  RentalItemContainer,
  Title,
  Icon,
  Footer,
  Price,
} from "./RentalItemElements";

import RentalModal from "../RentalModal";

const RentalItem = ({ item, specificCategory }) => {
  const { name, price, icon } = item;
  return (
    <>
      <RentalItemContainer specificCategory={specificCategory}>
        <Title specificCategory={specificCategory}>{name}</Title>
        <Icon src={icon} alt="Icon" />
        <Footer specificCategory={specificCategory}>
          <Price>{price} RON / ZI</Price>
          <RentalModal specificCategory={specificCategory} item={item} />
        </Footer>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
