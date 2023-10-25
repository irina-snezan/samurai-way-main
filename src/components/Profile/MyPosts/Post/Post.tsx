import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img
                src="https://avatars.mds.yandex.net/i?id=724551ba20d4dcac50e3902be8b336883d1a63d8-9882580-images-thumbs&n=13g" alt="User"/>
        </div>
    );
};

export default Post;