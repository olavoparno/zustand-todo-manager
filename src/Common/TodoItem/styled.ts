import styled from "styled-components";

export const StyledTodoContainer = styled.div`
  background: ${(props) => props.theme.background};
  margin-bottom: 37px;

  @media (min-width: 600px) {
    margin-bottom: 61px;
  }

  h2 {
    margin-left: 9px;
  }

  .container-head {
    display: flex;
    background-color: ${(props) => props.theme.todo.light};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 13px 16px;

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
