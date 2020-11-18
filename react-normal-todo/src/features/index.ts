import {combineReducers, createAction, createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {generate as generateRandomStr} from "randomstring"

// 할일에 대한 모델
export interface Todo{
    id: string;
    text : string; 
    isDone : boolean;
}

export interface TodoList{
    list : Todo[];
}

// 초기값 세팅..
const initialState : TodoList = {
    list : []
}

// 이름과 함께 action 생성
const actionPrefix = "TODOS"
const addTodos = createAction<object>(`${actionPrefix}/add`)
const toggleTodos = createAction<object>(`${actionPrefix}/toggle`)

// action 에 해당하는 함수(그 안에서 행위가 작동) 설정
/**
 * reducer는 이전 state와 action을 결합하여 새로운 state를 만드는 걸 도와주는 녀석입니다. old state + action => new state
 */
const reducers = {
    add : ({list } : TodoList, {payload : {text, isDone}} : PayloadAction<Todo>) => {
        const newTodo : Todo = {
            id : generateRandomStr(5),
            text : text.toString(),
            isDone
        };

        list.push(newTodo)
    },
    toggle : ({list } : TodoList, {payload : {id, isDone}} : PayloadAction<Todo>) => {
        const targetIndex = list.findIndex((item : Todo) => item.id === id);
        
        list[targetIndex].isDone = !isDone
    }
}

// todo 에 대한 모든 값을 받음
const todoSlice = createSlice({
    reducers,initialState, name : actionPrefix
})

// 
export const selectTodoList = createSelector((state : TodoList) => state.list, (list : Todo[]) => list)

export const actions = {
    addTodos,
    toggleTodos,
}

export const rootReducer = combineReducers({
    todos: todoSlice.reducer
})

console.log(todoSlice)

export type RootState = ReturnType<typeof rootReducer>