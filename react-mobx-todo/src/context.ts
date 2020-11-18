import { useContext } from "react";
import { createContext } from "react";
import { TodoList } from "./TodoList";

export const StoreContext = createContext<TodoList>({} as TodoList)
export const StoreProvider = StoreContext.Provider

export const useStore = (): TodoList => useContext(StoreContext);
