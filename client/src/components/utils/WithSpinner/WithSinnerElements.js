import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 30vh;
  height: 30vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 2.8rem;
  color: black;
`;
