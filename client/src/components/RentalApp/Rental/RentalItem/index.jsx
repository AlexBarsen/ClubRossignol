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
  PriceBike,
} from "./RentalItemElements";

import RentalModal from "../RentalModal";

const RentalItem = ({ item }) => {
  const { t } = useTranslation();

  const { name, productType, price, prices = null, icon } = item;

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
              <Price>
                <PriceBike>{prices[0]} RON / 2H</PriceBike>
                <PriceBike>{prices[1]} RON / 4H</PriceBike>
                <PriceBike>
                  {prices[2]} {t("ron_day")}
                </PriceBike>
              </Price>
            )}

            <RentalModal item={item} />
          </Wrapper>
        </Footer>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
