import styled from "styled-components";

export const StyledContainer = styled.div`
  color: ${(props) => props.theme.main};
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: calc(100% - 64px);
  padding: 45px 15px 0;

  @media (min-width: 600px) {
    padding: 60px 160px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 37px;

  @media (min-width: 600px) {
    margin-bottom: 60px;
  }
`;

export const StyledHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 31px;

  span {
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    text-align: right;
    margin-left: 20px;
  }

  @media (min-width: 600px) {
    margin-bottom: 64px;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  bottom: 0;
  height: 64px;
  width: 100vw;
  margin-left: -15px;

  clear: both;
  position: fixed;
  margin-top: -64px;

  background-color: ${(props) => props.theme.background};

  @media (min-width: 600px) {
    width: calc(100% - 320px);
    margin: 0;
  }
`;

export const StyledBorder = styled.div`
  border: 1px solid #414052;
  height: 1px;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 42px;
  line-height: 51px;
  margin-bottom: 27px;

  @media (min-width: 600px) {
    margin-bottom: 61px;
  }
`;

type TFlexContainer = {
  alignItems?: string;
  justifyContent?: string;
  fullWidth?: boolean;
  spacing?: number;
  flexDirection?: string;
};

export const StyledFlexContainer = styled.div<TFlexContainer>`
  display: flex;

  svg {
    cursor: pointer;
  }

  ${(props) =>
    props.alignItems &&
    `
  align-items: ${props.alignItems};
  `}

  ${(props) =>
    props.justifyContent &&
    `
    justify-content: ${props.justifyContent};
  `}

  ${(props) =>
    props.fullWidth &&
    `
    width: 100%;

    @media (min-width: 600px) {
      width: unset;
    }
  `}

  ${(props) =>
    props.spacing &&
    `
    *:not(:last-child) {
      margin-right: ${props.spacing}px;
    }
  `}

  ${(props) =>
    props.flexDirection &&
    `
    flex-direction: ${props.flexDirection};
  `}
`;

export const StyledLoadingContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  z-index: 101;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  filter: opacity(0.5);
`;

export const StyledLoader = styled.div`
  border: 4px solid ${(props) => props.theme.main};
  border-top: 4px solid ${(props) => props.theme.buttons.primary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
