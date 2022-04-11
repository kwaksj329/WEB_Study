export function getUserProfileByUserId(userId) {
    if(parseInt(userId) == 1){
        return {
            username: "Ikanny",
            major: "Computer engineering",
            age: 20
        };
    }else{
        return {
            username: "Sujong",
            major: "Computer engineering",
            age: 23
        };
    }
}

export function putUserProfile(userProfile) {
    return {
        userId: 1,
        ...userProfile
    };
}