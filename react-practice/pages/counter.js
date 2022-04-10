//import = 가져옴
//import Counter, {test, counterTest} from "../components/Counter";
import Counter from "../components/Counter";

const CounterPage = () => {
    return (
        <div>
            <Counter
                count={0}
                onCounterClick={() => console.log("hello world")}
            />
        </div>
    );
}

//export = 내보냄
export default CounterPage;