import {getUserProfileByUserId} from "../../../model/profile/profile.model";

const ProfilePage = ({
    username,
    major,
    age
    
}) => {
    return (
        <div>
            <p>username : {username}</p>
            <p>major : {major}</p>
            <p>age : {age}</p>
        </div>
    );
};
//SEO = Search Engine Optimization

export async function getServerSideProps(context){
    const {userId} = context.query.userId;
    const userProfile = getUserProfileByUserId(userId);

    return{
        props: userProfile
    };
}

export default ProfilePage;