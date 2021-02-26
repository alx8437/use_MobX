import {CounterPropsType} from "./CounterClass";
import React from "react";
import {observer, useLocalObservable} from "mobx-react";


//use component Observer => Перересовывает выборочно, в отличии от observer, который рендорит весь компонент
// export const CounterFunction: React.FC<CounterPropsType> = ({count}) => {
//     //observable - наблюдаемые значения и действия
//     const store = useLocalObservable(() => {
//         return {
//             counter: count,
//             inc() {
//                 this.counter++
//             },
//             dec() {
//                 this.counter--
//             }
//         }
//     })
//
//     return <div>
//         <button onClick={store.inc}>+</button>
//         <Observer>{() => <span>{store.counter}</span>}</Observer>
//         <button onClick={store.dec}>-</button>
//     </div>
// }





//Counter with mobX FunctionComponent
//observer - это реакция, on change render component
export const CounterFunction: React.FC<CounterPropsType> = observer(({count}) => {

    //observable - наблюдаемые значения и действия
    const store = useLocalObservable(() => {
        return {
            counter: count,
            get color() {
                return this.counter > 0 ? "green" : this.counter < 0 ? "red" : "black"
            },
            inc() {
                this.counter++;
            },
            dec() {
                this.counter--;
            }
        }
    })

    return <div>
        <button onClick={store.inc}>+</button>
        <span style={{color: store.color}}>{store.counter}</span>
        <button onClick={store.dec}>-</button>
    </div>
})






//Это просто счетчик с локальным стейтом
// export const CounterFunction: React.FC<CounterPropsType> = ({count}) => {
//     const [counter, setCounter] = useState(count);
//
//     const inc = () => {
//         setCounter(state => state + 1)
//     }
//
//     const dec = () => {
//         setCounter(state => state - 1)
//     }
//
//     return <div>
//         <button onClick={inc}>+</button>
//         <span>{counter}</span>
//         <button onClick={dec}>-</button>
//     </div>
// }