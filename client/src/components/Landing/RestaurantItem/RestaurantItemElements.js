import styled from "styled-components";

export const RestaurantItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* background: lightcyan; */
  border: 1.5px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Wrapper = styled.div`
  /* display: flex; */
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RestaurantItemNameRO = styled.div`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  font-weight: bold;
`;

export const RestaurantItemNameENG = styled.div`
  font-size: 1.6rem;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionRO = styled.div`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const DescriptionENG = styled.div`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const Price = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Quantity = styled.div`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
