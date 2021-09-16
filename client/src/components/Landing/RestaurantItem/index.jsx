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

import { useTranslation, usetranslation } from "react-i18next";

const RestaurantItem = ({ item }) => {
  const { name, description, alergens, quantity, price } = item;

  const { t } = useTranslation();

  return (
    <RestaurantItemContainer>
      <Wrapper>
        <ContainerName>
          <RestaurantItemNameRO>{t(name)}</RestaurantItemNameRO>
        </ContainerName>

        <ContainerDescription>
          <DescriptionRO>{t(description)}</DescriptionRO>

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
