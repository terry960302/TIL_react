import {combineReducers} from "redux"
import todos from "./todos"

// register tood reducer to root reducer

const rootReducer = combineReducers({
    todos
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>