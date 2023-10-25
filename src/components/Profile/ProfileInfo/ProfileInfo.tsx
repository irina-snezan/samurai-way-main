import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <img src="https://get.wallhere.com/photo/trees-landscape-sunset-lake-nature-reflection-grass-sky-field-green-morning-Sun-panorama-Pennsylvania-marsh-creek-state-park-wildfire-cloud-agriculture-meadow-prairie-computer-wallpaper-57591.jpg" alt="Pennsylvania"/>
            <div className={classes.description}> ava + description</div>
        </div>
    )
}
export default ProfileInfo;
