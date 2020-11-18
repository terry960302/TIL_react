import React, { useReducer } from "react"

type Action = 
 | {type : "INCREASE"} 
 | {type : "DECREASE"}

function reducer(state : number, action : Action) : number{ // old state + action => new state이므로 반환값의 타입은 number
    switch(action.type){
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error("Unexpected new Action")
    }
}

const initialState : number = 0;

function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, initialState) // dispatch를 사용해서 action를 알림

    const onIncrease = () => dispatch({type : "INCREASE"})
    const onDecrease = () => dispatch({type : "DECREASE"})

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}


export default CounterReducer