import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import CounterStore from "./stores/counter";

const App = observer(({ number, increase, decrease }: CounterStore) => {
  return (
    <Wrapper>
      <NumText>{number}</NumText>
      <BtnWrapper>
        <IncreaseBtn onClick={increase}>+1</IncreaseBtn>
        <DecreaseBtn onClick={decrease}>-1</DecreaseBtn>
      </BtnWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NumText = styled.span`
  font-size: 30px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const IncreaseBtn = styled.button``;

const DecreaseBtn = styled.button``;

export default App;
