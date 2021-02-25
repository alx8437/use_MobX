import {CounterPropsType} from "./CounterClass";
import React, {useState} from "react";
import {observer, useLocalObservable, Observer} from "mobx-react";


//use component Observer => Перересовывает выборочно, в отличии от observable, который рендорит весь компонент
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
            inc() {
                this.counter++
            },
            dec() {
                this.counter--
            }
        }
    })

    return <div>
        <button onClick={store.inc}>+</button>
        <span>{store.counter}</span>
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