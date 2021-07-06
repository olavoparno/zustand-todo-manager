import styled from "styled-components";

export const StyledTodoManagerContainer = styled.div`
  padding-bottom: 64px;

  p {
    color: ${(props) => props.theme.buttons.primary};
    font-size: 26px;
    font-weight: 600;
    line-height: 31px;
    letter-spacing: 0em;
  }
`;
