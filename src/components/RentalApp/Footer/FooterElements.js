import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 8rem;
  width: 100%;
  /* border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit; */
  background: black;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  /* padding: 2rem; */

  @media screen and (max-width: 700px) {
    height: 80%;
  }
`;

export const Logo = styled.img``;
