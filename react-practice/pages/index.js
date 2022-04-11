import React, {useState} from "react";
import LikeAndDislike from "../components/LikeAndDislike";

// 하나의 function이 하나의 page가 됨
const IndexPage = () => {
    const userName = "Sujong Kwak";
    const userAge = "23";
    const userMajor = "Computer Science"
    const [likeCount, setLikeCount] = useState(0);
    const [greetingflag, setGreetingFlag] = useState(false);
    const greeting = greetingflag ? "show greeting" : "hello";

    return (<div>
        <p>Name : {userName}</p>
        <p>Age : {userAge}</p>
        <p>Major : {userMajor}</p>
        <LikeAndDislike
            likeCount={likeCount}
            onLikeClick={()=>setLikeCount(likeCount+1)}
            onDislikeClick={
                ()=>{
                    if (likeCount <= 0){
                        return;
                    }
                    setLikeCount(likeCount-1);
                }
            }
        />
        <br></br>
        <button onClick={()=>setGreetingFlag(!greetingflag)}>{greeting}</button>
    </div>
    );
}

export default IndexPage;