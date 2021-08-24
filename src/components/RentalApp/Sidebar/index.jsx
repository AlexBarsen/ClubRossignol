import React from "react";

import { Category, Title, IconContainer, Icon } from "./SidebarElements";

const Sidebar = ({ category }) => {
  const { title, icon } = category;
  return (
    <>
      <Category>
        <Title>{title}</Title>
        <IconContainer to={`/rental/${title.toLowerCase()}`}>
          <Icon src={icon} alt={`${title}`} />
        </IconContainer>
      </Category>
    </>
  );
};

export default Sidebar;