import styled from "styled-components";

export const CartIconContainer = styled.div`
  position: relative;
  margin-right: 40px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-right: 60px;
  }
`;

export const IconContainer = styled.div`
  width: 40px;

  @media screen and (max-width: 768px) {
    width: 35px;
  }
`;

export const Icon = styled.img`
  filter: invert(100%);
  width: 40px;
  height: 40px;

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const ItemCount = styled.span`
  color: #fff;
  position: absolute;
  top: 17px;
  right: 15px;
  font-size: 1.6rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    top: 16px;
    right: 14px;
  }
`;
