import { throws } from "assert";
import { action, computed, observable, observe } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import { Component } from "react";
import { runInThisContext } from "vm";
import CounterStore from "../stores/CounterStore";

@observer
export  default class Counter extends Component{
    @observable count : number = 0

    @computed
    get currentCount() : number{
        return this.count;
    }

    @action
    increase = () => {
        console.log(this.count)
         this.count ++;
    };

    @action
    decrease = () =>{
        this.count --;
    }   
    
    render(){
        return (
            <div>
                <h1>{this.count}</h1> 
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </div>
        )
    }
}
// interface CounterProps{
//     counter : CounterStore
// }


// inject("counter")
// @observer
// export default class Counter extends Component{
//     render(){
//         const {counter} = this.props;

//         return (
//             <div>
//                 <h1>{counter.count}</h1>
//                 <button onClick={counter.increase}>+1</button>
//                 <button onClick={counter.decrease}>-1</button>
                
//             </div>
//         )
//     }
// }