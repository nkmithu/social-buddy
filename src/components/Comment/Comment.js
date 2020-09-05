import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';
import Grid from '@material-ui/core/Grid';

const Comment = () => {

    const [comments, setComments]=useState([])
    const {postId} = useParams();
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    
    const gridStyle={
        margin: "20px auto",
    }

    return (
        <Grid  item xs={12} sm={6} lg={6} style={gridStyle}>
            {
                comments.map(comment=><CommentDetails comment={comment} key={comment.id}></CommentDetails>)
            }
        </Grid>
    );
};

export default Comment;