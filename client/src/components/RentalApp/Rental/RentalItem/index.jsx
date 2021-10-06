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

  const { name, productType, price, icon } = item;

  return (
    <>
      <RentalItemContainer>
        <IconContainer>
          <Icon src={icon} alt="Icon" />
        </IconContainer>

        <Footer>
          <ProductName>{t(name)}</ProductName>

          <Wrapper>
            {productType !== "bike" ? (
              <Price>
                {price} {t("ron_day")}
              </Price>
            ) : (
              <Price>{t("price_bike")}</Price>
            )}

            <RentalModal item={item} />
          </Wrapper>
        </Footer>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
