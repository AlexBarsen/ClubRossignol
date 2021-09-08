import styled from "styled-components";
import Scroll from "react-scroll";

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
  max-height: 180rem;
  max-width: 130rem;
  min-width: 50rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DateRangeWrapper = styled.div``;

export const ModalInputs = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const WrapperRight = styled.div`
  margin-left: 2rem;
  width: 60%;

  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Element = styled(Scroll.Element)`
  @media screen and (max-width: 760px) {
    overflow: scroll;
    position: relative;
    height: 600px;
  }
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 3rem;
`;
