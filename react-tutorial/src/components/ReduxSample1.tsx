import React, { useReducer } from "react"

type Color = "red" | "orange" | "blue"

type State  = {
    count : number;
    text : string;
    color : Color;
    isGood : boolean;
}

type Action = 
    | {type : "SET_COUNT"; count : number}
    | {type : "SET_TEXT"; text : string}
    | {type : "SET_COLOR"; color : Color}
    | {type : "TOGGLE_GOOD"}

function reducer(state : State, action : Action) : State{

    switch(action.type){
        case "SET_COUNT":
            return {
                ...state,
                count : action.count
            }
        case "SET_TEXT":
            return {
                ...state,
                text : action.text
            }
        case "SET_COLOR":
            return {
                ...state,
                color : action.color
            }
        case "TOGGLE_GOOD":
            return {
                ...state,
                isGood : !state.isGood
            }
        default:
            throw new Error("Unexpected new action type")
    }

}

const initialState : State = {
    count : 0,
    text: "",
    color : "red",
    isGood : false,
}

function ReduxSample1(){
    const [state, dispatch] = useReducer(reducer, initialState)


    const setCount = () => dispatch({type : "SET_COUNT", count : 5}) // count to 5
    const setText = () => dispatch({type: "SET_TEXT", text : "hello world!"})
    const setColor = () => dispatch({type : "SET_COLOR", color : "orange"})
    const toggleGood = () => dispatch({type : "TOGGLE_GOOD"})

    return (
        <div>
            <p>
                <code>count : </code> {state.count}
            </p>
            <button onClick={setCount}>
                숫자 변경
            </button>

            <p>
                <code>text : </code>{state.text}
            </p>
            <button onClick={setText}>
                글자 변경
            </button>

            <p>
                <code>color : </code>{state.color}
            </p>
            <button onClick={setColor}>
                색 변경
            </button>

            <p>
                <code>isGood : </code>{state.isGood}
            </p>
            <button onClick={toggleGood}>
                good 변경
            </button>
        </div>
    )
}

export default ReduxSample1