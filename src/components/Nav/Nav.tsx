import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.menu}>
                <div className={classes.item}>
                    <div>
                        Profile
                    </div>
                    <div className={classes.item}>
                       Users
                    </div>
                    <div className={classes.item}>
                        Dialogs
                    </div>
                    <div className={classes.item}>
                       Messages
                    </div>
                    <div className={classes.item}>
                      News
                    </div>
                    <div className={classes.item}>
                        Settings
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;