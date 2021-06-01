import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextService from "./service/text.service";
import { BehaviorSubject } from "rxjs";
import { bind } from "@react-rxjs/core";
import { map, startWith } from "rxjs/operators";

const textSub = new BehaviorSubject<string>("");

const setText = (text: string) => textSub.next(text);

const [useText, text$] = bind(textSub.pipe(startWith("")));

const [useCharCount, charCount$] = bind(
  text$.pipe(map((text: string) => text.length))
);

function App() {
  const text = useText();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <span>{text}</span>
      <button onClick={() => setText("saslkdalksjdkas")}>클릭</button>
    </div>
  );
}

export default App;
