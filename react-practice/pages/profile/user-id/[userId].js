// import {getUserProfileByUserId} from "../../../model/profile/profile.model";
import useSWR from "swr";
import {useRouter} from "next/router";

const ProfilePage = ({
    // username,
    // major,
    // age
    
}) => {
    const router = useRouter();
    const {userId} = router.query;
    const {data, error} = useSWR(`/api/profile?userId=${userId}`)

    if (error) {return <div>failed to load</div>;}
    if (!data) {return <div>loading...</div>;}

    return (
        <div>
            <h1>Profile</h1>
            <p>username : {data.username}</p>
            <p>major : {data.major}</p>
            <p>age : {data.age}</p>
        </div>
    );
};
//SEO = Search Engine Optimization

// export async function getServerSideProps(context){
//     const {userId} = context.query.userId;
//     const userProfile = getUserProfileByUserId(userId);

//     return{
//         props: userProfile
//     };
// }

export default ProfilePage;