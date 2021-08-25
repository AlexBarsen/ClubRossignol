import styled from "styled-components";

export const CollapsibleContainer = styled.div`
  /* height: 200px; */
  background: red;
`;

export const ContentContainer = styled.div`
  height: 200px;
  /* width: ${({ isOpen }) => (isOpen ? "200px" : "0")}; */
  overflow: hidden;
  transition: width ease 0.3s;
`;

export const Content = styled.div`
  width: auto;
`;
