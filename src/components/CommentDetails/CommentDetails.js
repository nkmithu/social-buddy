import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const CommentDetails = (props) => {
    const {name, email, body} = props.comment;

    // Styles for cards
    const useStyles = makeStyles((theme) => ({

        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: theme.spacing(4)

        }

    }));
    const classes = useStyles();
    return (

        <Paper className={classes.paper}>
            <h5>Name: {name}</h5>
            <p>E-mail: {email}</p>
            <p>{body}</p>
        </Paper>
    );
};

export default CommentDetails;