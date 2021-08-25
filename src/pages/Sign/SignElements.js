import styled from "styled-components";

export const SignContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: radial-gradient(
    ellipse at left bottom,
    rgba(24, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
`;

export const CollapsibleContainer = styled.div`
  /* transition: width ease 0.8s; */
`;

export const Content = styled.div`
  transition: width ease 0.8s;
  overflow: hidden;
`;

export const ButtonContainer = styled.div``;
