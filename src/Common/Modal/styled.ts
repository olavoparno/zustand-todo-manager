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
  padding: 60px 29px;
  z-index: 1;

  h1 {
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 31px;
  }

  button {
    height: 48px;
    width: 187px;
    border-radius: 20px;
    align-self: center;

    @media (min-width: 600px) {
      width: 100%;
    }
  }

  @media (min-width: 600px) {
    padding: 60px 48px;

    h1 {
      margin-bottom: 44px;
    }
  }
`;

export const StyledInputField = styled.input`
  background-color: ${(props) => props.theme.todo.light};
  border-radius: 20px;
  border-color: transparent;
  height: 64px;
  width: 285px;
  margin-bottom: 38px;
  padding: 20px 14px;

  @media (min-width: 600px) {
    width: 480px;
    padding: 20px 24px;
    margin-bottom: 20px;
  }
`;

export const StyledTextArea = styled.textarea`
  background-color: ${(props) => props.theme.todo.light};
  height: 234px;
  width: 285px;
  border-radius: 20px;
  border-color: transparent;
  margin-bottom: 38px;
  resize: none;
  padding: 20px 14px;

  @media (min-width: 600px) {
    width: 480px;
    padding: 20px 24px;
    margin-bottom: 20px;
  }
`;

export const StyledCloseButton = styled.img`
  position: absolute;
  top: 21px;
  right: 21px;
  cursor: pointer;
`;
