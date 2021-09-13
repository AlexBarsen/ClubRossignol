import styled from "styled-components";

export const DashboardPageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
