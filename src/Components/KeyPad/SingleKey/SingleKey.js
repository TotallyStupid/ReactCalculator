import React from 'react';

import classes from './SingleKey.module.css';

const singleKey = (props) => (
    <button className={classes.NumberKey} onClick={props.clicked}>{props.children}</button>
);

export default singleKey;