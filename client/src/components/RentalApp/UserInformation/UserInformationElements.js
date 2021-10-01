import styled from "styled-components";

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  box-shadow: 0.7rem 0.7rem 1rem rgba(0, 0, 0, 0.4);
  padding-top: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const AvatarContainer = styled.div`
  width: 12rem;
  height: 12rem;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

export const UserDetailHeading = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  border-bottom: 2px solid black;

  @media screen and (max-width: 768px) {
    font-size: 3.4rem;
  }
`;

export const UserDetails = styled.div`
  max-width: 45rem;

  @media screen and (max-width: 768px) {
    max-width: 55rem;
  }
`;

export const Detail = styled.div`
  font-size: 2rem;
  padding: 1rem;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 2px 0px 0px 0px;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const DetailSpan = styled.span`
  font-weight: bold;
`;
