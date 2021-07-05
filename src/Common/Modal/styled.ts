import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  width: calc(100vw - 32px);
  height: calc(100vh - 160px);
  max-width: 576px;
  max-height: 597px;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.todo.dark};
  z-index: 1;
`;

export const StyledInputField = styled.input`
  background-color: ${(props) => props.theme.todo.light};
  height: 64px;
  width: 480px;
  border-radius: 20px;
`;

export const StyledTextArea = styled.textarea`
  background-color: ${(props) => props.theme.todo.light};
  height: 234px;
  width: 480px;
  border-radius: 20px;
`;
