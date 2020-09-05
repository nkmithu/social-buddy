import React from 'react';

const CommentDetails = (props) => {
    const {name, email, body} =props.comment;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>E-mail: {email}</p> 
            <p>Body: {body}</p> 
        </div>
    );
};

export default CommentDetails;