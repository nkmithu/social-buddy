import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const CommentDetails = (props) => {

    const comment = props.comment;
    const {name, email, body, id, img} = comment;

    // set Image to Comment
    const [singleImg,
        setSingleImg] = useState("");
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        fetch(url).then(res => res.json().then(data => setSingleImg(data.url)));

    }, [])

    comment.img = singleImg;

    // Styles for cards and Images
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
    const imgStyle = {

        height: "70px",
        width: "70px",
        border: "1px solid #000",
        borderRadius: "50%",
        margin: "10px auto",
        display: "block",
        objectFit: "cover"
    }

    return (

        <Paper className={classes.paper}>
            <img style={imgStyle} src={img} alt=""/>
            <h5>Name: {name}</h5>
            <p>E-mail: {email}</p>
            <p>{body}</p>

        </Paper>
    );
};

export default CommentDetails;