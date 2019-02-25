import React from 'react';

import classes from './ViewPort.module.css';

const viewPort = (props) => (
    <div className={classes.ViewPort}>{props.content}</div>
);

export default viewPort;