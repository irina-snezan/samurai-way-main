import React from 'react';
import Post from './Post/Post';
import classes from './MyPost.module.css';


export type MyPostsType = {
    message: string
}

const MyPosts: React.FC<MyPostsType> = (props) => {
    return (
        <div>
            <h2>My post</h2>
            <div className={classes.add_post}>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
            <Post message={'Hello!'} likeCount={9}/>
            <Post message={'See you later.'} likeCount={4}/>
            <Post message={'Creat!'} likeCount={1} />
        </div>
    );
};

export default MyPosts;