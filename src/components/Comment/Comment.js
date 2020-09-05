import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {

    const [comments, setComments]=useState([])
    const {postId} = useParams();
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            {
                comments.map(comment=><CommentDetails comment={comment}></CommentDetails>)
            }
        </div>
    );
};

export default Comment;