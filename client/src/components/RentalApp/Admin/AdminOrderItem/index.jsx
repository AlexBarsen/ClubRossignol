import React from "react";
import { useTranslation } from "react-i18next";

import {
  AdminOrderItemContainer,
  Wrapper,
  Detail,
  PriceDetail,
  DetailsContainer,
} from "./AdminOrderItemElements";

import Checkbox from "../Checkbox/index";

const AdminOrderItem = ({ item, status }) => {
  const { t } = useTranslation();

  const {
    id,
    days,
    endDate,
    firstName,
    lastName,
    name,
    price,
    sex,
    weight,
    height,
    experience,
    shoeSize,
    startDate,
    timePeriod,
  } = item;

  const currentStatus =
    status === "received" || status === "primită" ? false : true;

  return (
    <>
      <AdminOrderItemContainer>
        <Wrapper>
          <Detail>{t(name)}</Detail>
          <Detail>
            {firstName} {lastName}
          </Detail>
          <DetailsContainer>
            {sex ? (
              <Detail>
                {t("sex")}: {t(sex)}
              </Detail>
            ) : null}
            {shoeSize ? (
              <Detail>
                {t("shoeSize")}: {shoeSize}
              </Detail>
            ) : null}
            {weight ? (
              <Detail>
                {t("weight")}: {weight}
              </Detail>
            ) : null}
            {height ? (
              <Detail>
                {t("height")}: {height}
              </Detail>
            ) : null}
            {experience ? (
              <Detail>
                {t("experience")}: {t(experience)}
              </Detail>
            ) : null}
          </DetailsContainer>
          <DetailsContainer>
            <Detail>
              {t("from")}: {startDate}
            </Detail>
            <Detail>
              {t("to")}: {endDate}
            </Detail>
            <Detail>
              {t("days")}:{" "}
              {timePeriod
                ? timePeriod !== "days"
                  ? `${days} (${timePeriod})`
                  : `${days} days`
                : `${days} days`}
            </Detail>
          </DetailsContainer>

          {status === "complete" ? null : (
            <Checkbox
              size={25}
              name={id}
              checked={currentStatus}
              label={t("prepared")}
            />
          )}
        </Wrapper>
        <PriceDetail>
          {t("price")}: {days} x {price}RON = {days * price}RON
        </PriceDetail>
      </AdminOrderItemContainer>
    </>
  );
};

export default AdminOrderItem;
