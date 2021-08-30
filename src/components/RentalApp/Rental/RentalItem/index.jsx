import React from "react";

import {
  RentalItemContainer,
  Title,
  IconContainer,
  Icon,
  Wrapper,
  Footer,
  Price,
} from "./RentalItemElements";

import RentalModal from "../RentalModal";

const RentalItem = ({ item }) => {
  const { name, price, icon } = item;
  return (
    <>
      <RentalItemContainer>
        <IconContainer>
          <Icon src={icon} alt="Icon" />
        </IconContainer>

        <Wrapper>
          <Title>{name}</Title>
          <Footer>
            <Price>{price} RON / ZI</Price>
            <RentalModal item={item} />
          </Footer>
        </Wrapper>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
