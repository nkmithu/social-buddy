import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Post = (props) => {
    const {title, id} = props.post;

    const useStyles = makeStyles((theme) => ({

        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            margin: "20px"
        }
    }));
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={3} md={6} lg={12} direction="row">
            <Paper className={classes.paper}>
                <h3>{title}</h3>
                <Link to={`/posts/${id}`} className="details-btn">
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        Show Details
                    </Button>
                </Link>
            </Paper>
        </Grid>

    );
};

export default Post;