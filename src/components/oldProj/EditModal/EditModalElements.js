import styled from "styled-components";

export const EditModalContainer = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const ModalOverlay = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const Form = styled.form`
  position: relative;
`;

export const ModalContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  z-index: 10;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 2rem 4rem;
  border-radius: 1.5rem;
  max-width: 70vw;
  min-width: 60vw;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ModalInputs = styled.div``;

export const WrapperRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
