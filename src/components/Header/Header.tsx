import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://avatars.mds.yandex.net/i?id=e07292fbe030b6500f16e162187409ab-4231170-images-thumbs&n=13" alt="Logo"/>
        </header>
    );
};

export default Header;