import styled from "styled-components";

export const SignContainer = styled.div`
  width: 80%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 870px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const CollapsibleContainer = styled.div``;

export const Content = styled.div`
  transition: width ease 0.8s;
  overflow: hidden;
`;

export const ButtonContainer = styled.div``;
