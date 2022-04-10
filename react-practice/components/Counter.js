import React from "react";

//component = 하나의 UI 유닛
//react = 모든 것 = component
const Counter = ({
    count,
    onCounterClick
}) =>
    <div>
        <p>count : {count}</p>
        <button onClick={onCounterClick}>increment</button>
    </div>

//export const test = "test111";
//export const counterTest = 123;

//class 형태 예시
/*
class Counter extends React.Component {
    render(){
        return {
            <div></div>
        };
    }
}
*/

export default Counter;