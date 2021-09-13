import styled from "styled-components";

export const UserInformationContainer = styled.div`
  border: 1px solid black;
  height: fit-content;
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 213, 64, 1);

  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const UserDetails = styled.div``;

export const Detail = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;
