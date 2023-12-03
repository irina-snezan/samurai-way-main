import React from 'react';
import classes from './Post.module.css';

export type PostType = {
    message: string
    likeCount: number
}

const Post: React.FC<PostType> = (props) =>{
    return (
        <div className={classes.post}>
            <div className={classes.item}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=724551ba20d4dcac50e3902be8b336883d1a63d8-9882580-images-thumbs&n=13g"
                    alt="User"/>
                <p>{props.message}</p>
            </div>
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    );
};

export default Post;