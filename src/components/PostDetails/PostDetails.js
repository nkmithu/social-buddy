import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Comment from '../Comment/Comment';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';

const PostDetails = () => {
    // set state for post details
    const [postDetails,
        setPostDetails] = useState({});
    const {title, body, userId} = postDetails;
    const {postId} = useParams();

    // Get comment data
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [])

    // Styles for cards
    const useStyles = makeStyles((theme) => ({

        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"

        },
        gridStyle: {
            margin: "20px auto"
        }
    }));
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={8} className={classes.gridStyle}>
                    <Paper className={classes.paper}>
                        <h2>
                            Title: {title}</h2>
                        <p>
                            <small>UserId: {userId}</small>
                        </p>
                        <p>
                            <b>Full Stories:</b>  {body}</p>

                    </Paper>
                </Grid>
            </Grid>
            <h4 style={{
                    textAlign: 'center'
                }}>Comments</h4>
            <Grid container>
                <Comment></Comment>
            </Grid>
        </Container>

    );
};

export default PostDetails;