import { action, computed, observable } from "mobx";

export default class CounterStore {
    @observable count : number = 0

    @computed
    get currentCount() : number{
        return this.count;
    }

    @action
    increase = () => this.count + 1;

    @action
    decrease = () => this.count - 1;
}