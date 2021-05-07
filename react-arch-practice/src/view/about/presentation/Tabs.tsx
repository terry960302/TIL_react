import React from "react";
import * as StyledTabs from "./Tabs.styled";

function Tabs() {
  return (
    <div>
      <StyledTabs.TabBtn>탭1</StyledTabs.TabBtn>
      <StyledTabs.TabBtn>탭2</StyledTabs.TabBtn>
      <StyledTabs.TabBtn>탭3</StyledTabs.TabBtn>
    </div>
  );
}

export default Tabs;
