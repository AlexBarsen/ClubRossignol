import React from "react";

import {
  RestaurantItemContainer,
  RestaurantItemNameRO,
  RestaurantItemNameENG,
  DetailSpan,
  DescriptionRO,
  DescriptionENG,
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
      <RestaurantItemNameRO>
        {nameRO} <DetailSpan>{alergens}</DetailSpan>
      </RestaurantItemNameRO>
      <RestaurantItemNameENG>
        {nameENG ? `( ${nameENG} )` : null}
      </RestaurantItemNameENG>
      <DescriptionRO>{descriptionRO}</DescriptionRO>
      <DescriptionENG>{descriptionENG}</DescriptionENG>

      <Price>{price} RON</Price>
      <Quantity>{quantity}</Quantity>
    </RestaurantItemContainer>
  );
};

export default RestaurantItem;
