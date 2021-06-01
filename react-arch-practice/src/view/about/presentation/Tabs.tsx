import React from "react";
import styled from "styled-components";

function Tabs() {
  return (
    <div>
      <TabBtn>탭1</TabBtn>
      <TabBtn>탭2</TabBtn>
      <TabBtn>탭3</TabBtn>
    </div>
  );
}

export default Tabs;

export const TabBtn = styled.button`
  border: none;
`;
