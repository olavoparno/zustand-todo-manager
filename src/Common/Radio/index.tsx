import { StyledCheckmark, StyledLabel } from "./styled";
import { TRadioProps } from "./types";

export function Radio({ checked, onClick, id }: TRadioProps): JSX.Element {
  return (
    <StyledLabel>
      <input
        id={id}
        type="checkbox"
        defaultChecked={checked}
        onClick={onClick}
      />
      <StyledCheckmark />
    </StyledLabel>
  );
}
