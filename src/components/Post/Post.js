import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title,id} = props.post;
    
    return (
        <div>
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}><button>Show Details</button></Link>
             

        </div>
    );
};

export default Post;