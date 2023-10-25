import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <h2>My post</h2>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;