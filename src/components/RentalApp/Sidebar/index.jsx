import React from "react";

import { Category, Title, Icon } from "./SidebarElements";

const RentalCategory = ({ category }) => {
  const { title, icon } = category;
  return (
    <>
      <Category to={`/rental/${title.toLowerCase()}`}>
        <Title>{title}</Title>
        <Icon src={icon} alt={`${title}`}></Icon>
      </Category>
    </>
  );
};

export default RentalCategory;
