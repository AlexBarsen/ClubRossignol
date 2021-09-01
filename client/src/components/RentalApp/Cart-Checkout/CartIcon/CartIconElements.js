import styled from "styled-components";

export const CartIconContainer = styled.div`
  position: relative;
  margin-right: 40px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 40px;
`;

export const Icon = styled.img`
  filter: invert(100%);
`;

export const ItemCount = styled.span`
  color: #fff;
  position: absolute;
  top: 17px;
  right: 15px;
  font-size: 1.6rem;
  font-weight: bold;
`;
