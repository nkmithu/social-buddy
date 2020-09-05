import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const [postDetails,
        setPostDetails] = useState({});
    const {title, body, userId} = postDetails;
    const {postId} = useParams();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [])
    return (

        <div>
            This is post details of:{postId}
            <h2>
                Title: {title}</h2>
            <p>
                Body: {body}</p>
            <p>
                <small>UserId: {userId}</small>
            </p>

        <div>
            <Comment></Comment>
        </div>
        </div>
    );
};

export default PostDetails;