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
`;

export const ItemCount = styled.span`
  color: #fff;
  position: absolute;
  top: 17px;
  right: 15px;
  font-size: 1.6rem;
  font-weight: bold;

  @media screen and (max-width: 1100px) {
    top: 18px;
    right: 16px;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    top: 15px;
    right: 13px;
  }

  @media screen and (max-width: 450px) {
    font-size: 3rem;
    top: 13px;
    right: 13px;
  }

  @media screen and (max-width: 400px) {
    font-size: 3.4rem;
    top: 16px;
    right: 14px;
  }
`;
