import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
        </div>
    );
};


export default Profile;