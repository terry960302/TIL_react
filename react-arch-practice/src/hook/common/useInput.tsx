import React, { ChangeEvent, useCallback, useState } from "react";

type Props = {
  initValue?: string;
};
function useInput({ initValue }: Props) {
  const [value, setValue] = useState<string>(initValue ?? "");

  const handleValue = useCallback(() => {
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  }, []);

  return {
    value,
    handleValue,
  };
}

export default useInput;
