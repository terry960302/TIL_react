import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { TodoList } from "./TodoList";
import { StoreProvider } from "./context";

const todoList = new TodoList([
    'Should Starting Writing in React',
    'Should Learn MobX',
    'Should Watch Once Piece :)'
])

ReactDOM.render(
    <StoreProvider value={todoList}>
        <App/>
    </StoreProvider>, document.getElementById("root")
)