import React from "react";
import { useTranslation } from "react-i18next";

import {
  RentalItemContainer,
  ProductName,
  IconContainer,
  Icon,
  Footer,
  Wrapper,
  Price,
} from "./RentalItemElements";

import RentalModal from "../RentalModal";

const RentalItem = ({ item }) => {
  const { t } = useTranslation();

  const { name, price, icon } = item;
  return (
    <>
      <RentalItemContainer>
        <IconContainer>
          <Icon src={icon} alt="Icon" />
        </IconContainer>

        <Footer>
          <ProductName>{t(name)}</ProductName>

          <Wrapper>
            <Price>
              {price} {t("ron_day")}
            </Price>
            <RentalModal item={item} />
          </Wrapper>
        </Footer>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
