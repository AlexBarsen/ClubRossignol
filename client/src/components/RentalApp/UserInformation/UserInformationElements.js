import styled from "styled-components";

export const UserInformationContainer = styled.div`
  margin-top: 2rem;
  background: #fa2742;
  border-radius: 1rem;
  width: 50rem;
  height: fit-content;
`;

export const UserDetails = styled.div`
  padding: 2rem;
`;

export const Detail = styled.div`
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
`;
