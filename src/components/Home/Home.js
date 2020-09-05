import React, {useEffect, useState} from 'react';
import Post from '../Post/Post';
import Container from '@material-ui/core/Container';

const Home = () => {
    const [posts,
        setPosts] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (

        <Container>
            
            <h2 style={{margin:"20px"}}>All posts - Have a look!</h2>

            {posts.map(post =>< Post post = {
                post
            }
            key = {
                post.id
            } > </Post>)
}

        </Container>

    );
};

export default Home;