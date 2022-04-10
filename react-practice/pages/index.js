import Link from "next/link";

const userName = "xoxristine";

// 하나의 function이 하나의 page가 됨
const IndexPage = () => 
    <div>
        <p>hello world {userName}</p>
        <Link href="/counter">
            <a>Counter</a>
        </Link>
    </div>;

export default IndexPage;