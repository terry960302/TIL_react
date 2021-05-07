import React, { useState } from "react";
import Tabs from "../presentation/Tabs";

function TabsContainer() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <div>
      <Tabs />
    </div>
  );
}

export default TabsContainer;
