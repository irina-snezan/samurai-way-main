import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';

type NavType = {

}
const Nav:React.FC<NavType> = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.menu}>
                <div className={classes.item}>
                    <div className={classes.item}>
                    <NavLink to="/Profile" activeClassName={classes.activeLink}>
                        Profile
                    </NavLink>
                    </div>
                    <div className={`${classes.item} ${classes.active}`}>
                        <NavLink to="/Dialogs" activeClassName={classes.activeLink}>
                        Dialogs
                        </NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/Users" activeClassName={classes.activeLink}>
                        Users
                    </NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to="/Messages" activeClassName={classes.activeLink}>
                        Messages
                    </NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to="/News" activeClassName={classes.activeLink}>
                        News
                    </NavLink>
                    </div>
                    <div className={classes.item}>
                    <NavLink to="/Settings" activeClassName={classes.activeLink}>
                        Settings
                    </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;