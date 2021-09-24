import styled from "styled-components";

export const HeaderOption = styled.div`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  margin-right: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3rem;
    margin-right: 3rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 4rem;
    margin-right: 4rem;
  }
`;

export const SignInModalContanier = styled.div`
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
  min-width: 50rem;
  max-height: 120rem;
  max-width: 150rem;

  @media screen and (max-width: 600px) {
    top: 35%;
    width: 72rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 2rem;
`;