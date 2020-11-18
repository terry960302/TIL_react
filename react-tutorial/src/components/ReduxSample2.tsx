import React from "react"
import { useReducer } from "react"
import { combineReducers } from "redux"


/**
 * 그냥 단순한 카운터 기능
 */



//action types
const INCREMENT = "counter/INCREMENT" as const 
const DECREMENT = "counter/DECREMENT" as const 
const INCREASE_BY = "counter/INCREASE_BY" as const

//actions

const onIncrease = () => {
    return {
        type : INCREMENT
    }
}

const onDecrease = () => {
    return {
        type : DECREMENT
    }
}

const onIncreaseBy = (count : number) => {
    return {
        type : INCREASE_BY,
        payload : count
    }
}

type CounterAction = | ReturnType<typeof onIncrease> | ReturnType<typeof onDecrease> | ReturnType<typeof onIncreaseBy>

const initialState : number = 0;

// reducer

export function counterReducer(state : number = initialState, action  : CounterAction){
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case INCREASE_BY:
            return state + action.payload;
        default:
            throw Error("Unexpected error")

    }
}

//root reducer

export const rootReducer = combineReducers({
    counterReducer,
    // redux는 store가 하나이므로 이렇게 한방에 모아서 합침
})


export default function ReduxSample2(){

    // reducer를 dispatch 해줌
    const [state, dispatch] = useReducer(counterReducer, initialState)

    // UI에서 사용할 함수로 가쟈옴
    const increase = () => dispatch({type : INCREMENT})
    const decrease = () => dispatch({type : DECREMENT})
    const increaseBy = () => dispatch({type : INCREASE_BY, payload: 5}) 

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={increaseBy}>+5</button>
        </div>
    )


}