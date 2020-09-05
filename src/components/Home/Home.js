import React, {useEffect, useState} from 'react';
import Post from '../Post/Post';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    const [posts,
        setPosts] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    const textStyle = {
        margin: "15px"
    }

    return (
        <Container>
            <h2 style={textStyle}>Social Buddy- All posts</h2>
            <p style={textStyle}>Want to read full story? Click the button called 'Show Details'
            </p>
            <Grid container spacing={4}>
                {posts.map(post =>< Post post = {
                    post
                }
                key = {
                    post.id
                } > </Post>)
}

            </Grid>
        </Container>

    );
};

export default Home;