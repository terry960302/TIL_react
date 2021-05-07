import React, { useCallback, useState } from "react";

function usePopup() {
  const [isOpenPopup, setOpenPopup] = useState<boolean>(false);

  const openPopup = useCallback(() => {
    setOpenPopup(true);
  }, []);
  const closePopup = useCallback(() => {
    setOpenPopup(false);
  }, []);

  return {
    isOpenPopup,
    openPopup,
    closePopup,
  };
}

export default usePopup;
