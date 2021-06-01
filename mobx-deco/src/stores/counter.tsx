import { observable, action, makeObservable, makeAutoObservable } from "mobx";

// export default class CounterStore {
//   @observable number = 0;

//   @action
//   increase = () => {
//     this.number += 1;
//   };

//   @action
//   decrease = () => {
//     this.number -= 1;
//   };
// }

export default class CounterStore {
  number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.number++;
  }

  decrease() {
    this.number--;
  }
}
