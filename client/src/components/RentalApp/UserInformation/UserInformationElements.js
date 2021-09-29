import styled from "styled-components";

export const UserInformationContainer = styled.div`
  border: 2px solid black;
  height: fit-content;
  padding: 1.5rem;
  background: rgba(255, 213, 64, 1);

  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const UserDetailHeading = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  width: fit-content;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 3.4rem;
  }
`;

export const UserDetails = styled.div``;

export const Detail = styled.div`
  font-size: 2rem;
  padding: 0.5rem 0rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;
