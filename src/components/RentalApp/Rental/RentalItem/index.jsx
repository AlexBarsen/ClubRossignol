import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { name, price, icon } = item;
  return (
    <>
      <RentalItemContainer>
        <IconContainer>
          <Icon src={icon} alt="Icon" />
        </IconContainer>

        <Wrapper>
          <Title>{t(name)}</Title>
          <Footer>
            <Price>
              {price} {t("ron_day")}
            </Price>
            <RentalModal item={item} />
          </Footer>
        </Wrapper>
      </RentalItemContainer>
    </>
  );
};

export default RentalItem;
