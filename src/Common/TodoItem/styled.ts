import styled from "styled-components";

export const StyledTodoContainer = styled.div`
  background: ${(props) => props.theme.background};
  margin-bottom: 37px;

  h2 {
    margin-left: 9px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }

  @media (min-width: 600px) {
    margin-bottom: 61px;

    h2 {
      margin-left: 20px;
    }
  }

  .container-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.todo.light};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 13px 16px;

    svg {
      cursor: pointer;
    }

    @media (min-width: 600px) {
      padding: 20px;
    }
  }

  .container-body {
    background-color: ${(props) => props.theme.todo.dark};
    padding: 19px 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;

    @media (min-width: 600px) {
      padding: 20px;
    }
  }

  .container-foot {
    background-color: ${(props) => props.theme.todo.light};
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 7px 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;

    @media (min-width: 600px) {
      padding: 20px;
    }
  }
`;

export const StyledDotMenu = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.todo.light};
  border: 1px solid ${(props) => props.theme.background};
  width: 178px;
  height: 68px;
  right: 30px;
  border-radius: 20px;

  @media (min-width: 600px) {
    right: 182px;
    width: 216px;
  }
`;
