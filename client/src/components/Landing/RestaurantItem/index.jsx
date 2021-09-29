import React from "react";

import {
  RestaurantItemContainer,
  DescriptionWrapper,
  ContainerName,
  RestaurantItemName,
  DetailSpan,
  ContainerDescription,
  Description,
  ContainerDetails,
  Price,
  Quantity,
} from "./RestaurantItemElements";

import { useTranslation } from "react-i18next";

const RestaurantItem = ({ item }) => {
  const { name, description, alergens, quantity, price } = item;

  const { t } = useTranslation();

  return (
    <RestaurantItemContainer>
      <DescriptionWrapper>
        <ContainerName>
          <RestaurantItemName>{t(name)}</RestaurantItemName>
        </ContainerName>

        <ContainerDescription>
          <Description>{t(description)}</Description>

          <DetailSpan>{alergens}</DetailSpan>
        </ContainerDescription>
      </DescriptionWrapper>

      <ContainerDetails>
        <Price>{price} RON</Price>
        <Quantity>{quantity}</Quantity>
      </ContainerDetails>
    </RestaurantItemContainer>
  );
};

export default RestaurantItem;
