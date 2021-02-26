import {action, computed, makeObservable, observable} from "mobx";

export class CounterStoreClass {
    counter = 0

    constructor() {
        makeObservable(this, {
            counter: observable,
            inc: action,
            dec: action.bound,
            color: computed
        })
    }

    get color() {
        return this.counter > 0 ? "green" : this.counter < 0 ? "red" : "black"
    }

    inc = () => {
        this.counter += 1
    }

    dec() {
        this.counter -= 1
    }
}