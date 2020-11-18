import { combineReducers } from "redux"
import postReducer from "./ducks/post"

export const rootReducer = combineReducers({
    postReducer,
})