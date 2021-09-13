import styled from "styled-components";

const handleFontSizeType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "1.6rem";
    case "checkout":
      return "2rem";
    case "signIn":
      return "2rem";
    case "signUp":
      return "2rem";
    case "close":
      return "2rem";
    case "modal":
      return "2rem";
    case "order":
      return "2rem";
    default:
      break;
  }
};

const handleFontSizeQueryType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "3.2rem";
    case "checkout":
      return "4rem";
    case "signIn":
      return "3.2rem";
    case "signUp":
      return "3.2rem";
    case "close":
      return "4rem";
    case "modal":
      return "4.4rem";
    case "order":
      return "3.4rem";
    default:
      break;
  }
};

const handleColorType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "#001730";
    case "checkout":
      return "#001730";
    case "signIn":
      return "#001730";
    case "signUp":
      return "#001730";
    case "close":
      return "#001730";
    case "modal":
      return "#001730";
    case "order":
      return "#001730";
    default:
      break;
  }
};

const handlePaddingType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "1rem 1rem";
    case "checkout":
      return "1rem";
    case "signIn":
      return "1rem";
    case "signUp":
      return "1rem";
    case "close":
      return "0.5rem 2rem";
    case "modal":
      return "1rem";
    case "order":
      return "0.5rem";
    default:
      break;
  }
};

const handlePaddingQueryType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "1rem 1rem";
    case "checkout":
      return "1rem 2rem";
    case "signIn":
      return "1.5rem";
    case "signUp":
      return "1.5rem";
    case "close":
      return "1rem 4rem";
    case "modal":
      return "1rem";
    case "order":
      return "0.5rem";
    default:
      break;
  }
};

const handleWidthType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "12rem";
    case "checkout":
      return "20rem";
    case "signIn":
      return "15rem";
    case "signUp":
      return "15rem";
    case "close":
      return "4rem";
    case "modal":
      return "30rem";
    case "order":
      return "12rem";
    default:
      break;
  }
};

const handleWidthQueryType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "14rem";
    case "checkout":
      return "35rem";
    case "signIn":
      return "25rem";
    case "signUp":
      return "25rem";
    case "close":
      return "4rem";
    case "modal":
      return "45rem";
    case "order":
      return "20rem";
    default:
      break;
  }
};

export const Button = styled.button`
  border-radius: 1rem;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;

  padding: ${({ buttonType }) => handlePaddingType(buttonType)};
  width: ${({ buttonType }) => handleWidthType(buttonType)};
  font-size: ${({ buttonType }) => handleFontSizeType(buttonType)};
  background: ${({ buttonType }) => handleColorType(buttonType)};
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }

  @media screen and (max-width: 600px) {
    font-size: ${({ buttonType }) => handleFontSizeQueryType(buttonType)};
    width: ${({ buttonType }) => handleWidthQueryType(buttonType)};
    padding: ${({ buttonType }) => handlePaddingQueryType(buttonType)};
  }
`;
