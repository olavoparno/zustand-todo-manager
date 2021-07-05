import styled from "styled-components";

export const StyledCheckmark = styled.span`
  position: block;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 3px solid ${(props) => props.theme.buttons.primary};
  border-radius: 50%;
  transition: background-color 0.1s ease;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  @media (min-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ ${StyledCheckmark} {
    background-color: #ccc;
  }

  input:checked ~ ${StyledCheckmark} {
    background-color: #2196f3;
  }

  input:checked ~ ${StyledCheckmark}:after {
    display: block;
  }

  ${StyledCheckmark}:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
