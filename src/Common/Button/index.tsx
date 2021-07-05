import { StyledButton } from "./styled";
import { TStyledButtonProps } from "./types";

export function Button({
  children,
  color,
  name,
  onClick,
}: TStyledButtonProps): JSX.Element {
  return (
    <StyledButton name={name} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
