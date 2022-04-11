//import = 가져옴
//import Counter, {test, counterTest} from "../components/Counter";
import React, {useState} from "react";
import Counter from "../components/Counter";

const CounterPage = () => {
    // 0 : 초기값
    const [count, setCount] = useState(0);
    return (
        <div>
            <Counter
                count={count}
                onCounterClick={() => setCount(count+1)}
            />
        </div>
    );
}

//export = 내보냄
export default CounterPage;