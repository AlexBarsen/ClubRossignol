import React from "react";

import {
  RestaurantItemContainer,
  Wrapper,
  ContainerName,
  RestaurantItemNameRO,
  RestaurantItemNameENG,
  DetailSpan,
  ContainerDescription,
  DescriptionRO,
  DescriptionENG,
  ContainerDetails,
  Price,
  Quantity,
} from "./RestaurantItemElements";

const RestaurantItem = ({ item }) => {
  const {
    nameRO,
    nameENG,
    alergens,
    quantity,
    price,
    descriptionRO,
    descriptionENG,
  } = item;

  return (
    <RestaurantItemContainer>
      <Wrapper>
        <ContainerName>
          <RestaurantItemNameRO>{nameRO}</RestaurantItemNameRO>
          <RestaurantItemNameENG>
            {nameENG ? `( ${nameENG} )` : null}
          </RestaurantItemNameENG>
        </ContainerName>

        <ContainerDescription>
          <DescriptionRO>{descriptionRO}</DescriptionRO>
          <DescriptionENG>{descriptionENG}</DescriptionENG>
          <DetailSpan>{alergens}</DetailSpan>
        </ContainerDescription>
      </Wrapper>

      <ContainerDetails>
        <Price>{price} RON</Price>
        <Quantity>{quantity}</Quantity>
      </ContainerDetails>
    </RestaurantItemContainer>
  );
};

export default RestaurantItem;
