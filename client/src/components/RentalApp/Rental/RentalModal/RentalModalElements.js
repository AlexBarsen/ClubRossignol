import styled from "styled-components";
import Scroll from "react-scroll";

export const RentalModalContainer = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
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
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
`;

export const Element = styled(Scroll.Element)`
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
    overflow: scroll;
    position: relative;
    height: 600px;
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DateRangeWrapper = styled.div``;

export const WrapperRight = styled.div`
  width: 60%;

  @media screen and (max-width: 900px) {
    margin: 0;
    width: 100%;
  }
`;

export const ModalInputs = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 3rem;
`;
