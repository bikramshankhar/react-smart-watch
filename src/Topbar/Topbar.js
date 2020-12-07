import React from 'react';

import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <header>
        <nav className={classes.Topbar}>
        <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png" alt="Amazon Logo" />
        </nav>
      </header>
    )
}

export default Topbar;