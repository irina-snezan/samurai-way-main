import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {MyPostsType} from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts message={'gggg'} />
        </div>
    );
};


export default Profile;