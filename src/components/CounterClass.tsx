import React from "react";
import {observer} from "mobx-react";
import {runInAction} from "mobx";
import {CounterStoreClass} from "../store/CounterStoreClass";


const store = new CounterStoreClass()

//Counter from store with mobX ClassComponent
export type CounterPropsType = {
    count: number
}

//@observer on change, render component
export const CounterClass = observer(class extends React.Component<CounterPropsType>{

    componentDidMount(): void {
        //так мы напрямую привязываем значение из пропсов - это артхитектурно неверно
        // store.counter = this.props.count

        // Must use this method
        runInAction(() => {
            store.counter = this.props.count
        })
    }

    render() {
        return <div>
            <button onClick={store.dec}>-</button>
            <span style={{color: store.color}}>{store.counter}</span>
            <button onClick={store.inc}>+</button>
        </div>
    }

})






// //Counter with mobX ClassComponent
// export type CounterPropsType = {
//     count: number
// }
//
// //@observer on change, render component
// export const CounterClass = observer(class extends React.Component<CounterPropsType>{
//     //@observable - наблюдаемые значения и действия, раньше, до 6 версии, использовали такой декоратор
//     count = 0
//
//
//     //@computed - пересчет значений после изменений count
//     get color() {
//         return this.count > 0 ? "green" : this.count < 0 ? "red" : "black"
//     }
//
//     //now use it
//     constructor(props: CounterPropsType) {
//         super(props)
//         makeObservable(this, {
//             count: observable,
//             color: computed, //пересчет значений после изменений count
//             incrementCount: action,
//             decrementCount: action.bound,
//         });
//         this.count = this.props.count
//     }
//
//     // @action - для стрелочной использховался бы такой декоратор
//     incrementCount = () => this.count += 1
//
//     // @action.bound - для метода использховался бы такой декоратор
//     decrementCount() {
//         this.count -= 1;
//     }
//
//     render() {
//         return <div>
//             <button onClick={this.decrementCount.bind(this)}>-</button>
//             <span style={{color: this.color}}>{this.count}</span>
//             <button onClick={this.incrementCount}>+</button>
//         </div>
//     }
//
// })





//Это просто счетчик с локальным стейтом
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