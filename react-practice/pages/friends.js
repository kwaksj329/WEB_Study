//list로 된 자료구조 가지고 한번에 렌더링하는 방법
const friends = ["Eric", "Jimmy", "Steve", "Joe"];

const FriendsPage = () => 
    <div>
        {friends.map((friends, i) => <p key={i}>name : {friends}</p>)}
    </div>;

//{friends -> 데이터 바인딩}

export default FriendsPage;