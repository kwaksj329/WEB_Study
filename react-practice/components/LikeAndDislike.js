const LikeAndDislike = ({
    likeCount,
    onLikeClick,
    onDislikeClick
}) => {
    return(
    <div>
        <p>{likeCount}</p>
        <button onClick={onLikeClick}>like</button>
        <button onClick={onDislikeClick}>dislike</button>
    </div>);
}

export default LikeAndDislike;