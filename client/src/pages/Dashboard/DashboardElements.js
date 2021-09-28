import styled from "styled-components";

export const DashboardPageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
