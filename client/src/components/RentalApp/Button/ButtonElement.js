import styled from "styled-components";

const handleFontSizeType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "1.6rem";
    case "checkout":
      return "2rem";
    case "signIn":
      return "2rem";
    case "signOut":
      return "2rem";
    case "close":
      return "2rem";
    case "modal":
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
      return "2rem";
    case "signIn":
      return "2rem";
    case "signOut":
      return "2rem";
    case "close":
      return "2rem";
    case "modal":
      return "4.4rem";
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
    case "signOut":
      return "#001730";
    case "close":
      return "#001730";
    case "modal":
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
      return "2rem";
    case "signIn":
      return "2rem";
    case "signOut":
      return "2rem";
    case "close":
      return "2rem";
    case "modal":
      return "1rem";
    default:
      break;
  }
};

const handleWidthType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "12rem";
    case "checkout":
      return "2rem";
    case "signIn":
      return "2rem";
    case "signOut":
      return "2rem";
    case "close":
      return "2rem";
    case "modal":
      return "30rem";
    default:
      break;
  }
};

const handleWidthQueryType = (buttonType) => {
  switch (buttonType) {
    case "rentalItem":
      return "14rem";
    case "checkout":
      return "2rem";
    case "signIn":
      return "2rem";
    case "signOut":
      return "2rem";
    case "close":
      return "2rem";
    case "modal":
      return "45rem";
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
  }
`;
