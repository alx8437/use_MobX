import React from "react";
import {observer} from "mobx-react";
import {action, makeObservable, observable} from "mobx";



type PropsType = {
    count: number
}


//@observer
export const CounterClass = observer(class extends React.Component<PropsType>{
    //@observable - раньше, до 6 версии, использовали такой декоратор
    count = 0

    constructor(props: PropsType) {
        super(props)
        makeObservable(this, {

            count: observable,
            incrementCount: action,
            decrementCount: action.bound,
        });
        this.count = this.props.count
    }

    // @action - для стрелочной использховался бы такой декоратор
    incrementCount = () => this.count++

    // @action.bound - для метода использховался бы такой декоратор
    decrementCount() {
        this.count--;
    }



    render() {
        return <div>
            <button onClick={this.decrementCount.bind(this)}>-</button>
            <span>{this.count}</span>
            <button onClick={this.incrementCount}>+</button>
        </div>
    }

})





//
// type PropsType = {
//     counter: number
// }
//
// type StateType = {
//     count: number,
// }
//
// export class CounterClass extends React.Component<PropsType, StateType> {
//
//     state: StateType = {
//         count: this.props.counter
//     };
//
//     incrementCount = () => {
//         this.setState((prevState: StateType): StateType => ({count: prevState.count + 1}));
//     }
//
//     decrementCount() {
//         this.setState((prevState: StateType): StateType => ({count: prevState.count - 1}));
//     }
//
//
//
//     render() {
//         return <div>
//             <button onClick={this.decrementCount.bind(this)}>-</button>
//             <span>{this.state.count}</span>
//             <button onClick={this.incrementCount}>+</button>
//         </div>
//     }
//
// }