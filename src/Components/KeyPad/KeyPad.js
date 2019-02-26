import React from 'react';

import SingleKey from './SingleKey/SingleKey';
import classes from './KeyPad.module.css';

const keys = [
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: '+', value: '+' },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: '-', value: '-' },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 'x', value: '*' },
    { label: '.', value: '.' },
    { label: 0, value: 0 },
    { label: '=', value: '=' },
    { label: '/', value: '/' }
]

const keyPad = (props) => (
    <div className={classes.KeyPad}>
        {keys.map(key => (
            <SingleKey 
                key={key.value}
                clicked={() => props.clicked(key.value)}>{key.label}</SingleKey>
        ))}
    </div>
);

export default keyPad;