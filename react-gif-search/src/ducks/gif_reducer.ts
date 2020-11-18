
import {
    createAsyncAction,
    ActionType,
    createReducer
  } from 'typesafe-actions';

// Action Types
export const GET_GIFS_REQUEST = "gif/GET_GIFS_REQUEST" as const 
export const GET_GIFS_SUCCESS = "gif/GET_GIFS_SUCCESS" as const 
export const GET_GIFS_FAILURE = "gif/GET_GIFS_FAILURE" as const 

// Data Types
type GifReq = {
    keyword : string;
}

export type Gif = {
    url : string;
    dims : number[];
    preview : string;
    size: number;
}

type GifRes = {
    gifs : Gif[]
}

type Error = {
    message : string;
}

// All State for Gif
type State = {
    gifs : Gif[];
    keyword : string;
    message : string;
}

const initialState : State = {
    gifs : [],
    keyword : "",
    message : "",
}

// Action Creator
export const getGifs = createAsyncAction(GET_GIFS_REQUEST, GET_GIFS_SUCCESS, GET_GIFS_FAILURE)<GifReq, GifRes, Error>()

// Aggregate all actions
const gifActions = {
    getGifs
}

// Action Types for Typescript
export type GifAction = ActionType<typeof gifActions>


// Reducer
const gifReducer = createReducer<State, GifAction>(initialState)
    .handleAction(getGifs.request, (state, action) => {
        return {
            ...state,
            keyword : action.payload.keyword
        }
    })
    .handleAction(getGifs.success, (state, action) => {
        return {
            ...state,
            gifs : action.payload.gifs
        }
    })
    .handleAction(getGifs.failure, (state, action) => {
        return{
            ...state,
            message : action.payload.message
        }
    })

// Reducer (state, action matched) Type
export type GifState = ReturnType<typeof gifReducer>

export default gifReducer;