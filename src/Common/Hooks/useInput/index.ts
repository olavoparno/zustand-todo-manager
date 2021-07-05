import { useState, useCallback } from "react";

export function useInput(
  initialData = {}
): [Record<string, string>, (event: unknown) => void] {
  const [values, setValues] = useState(initialData);

  const handleChange = useCallback((event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setValues((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  }, []);

  return [values, handleChange];
}
