import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  width: 163px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.main};

  background-color: ${(props) =>
    props.theme.buttons[props.color as keyof typeof props.theme.buttons] ||
    props.theme.buttons.primary};
  color: ${(props) => props.theme.main};

  @media (min-width: 600px) {
    width: 195px;
    height: 48px;
  }
`;
