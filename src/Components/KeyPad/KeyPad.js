import React from 'react';

import SingleKey from './SingleKey/SingleKey';
import classes from './KeyPad.module.css';

const keyPad = (props) => (
    <div className={classes.KeyPad}>
        <SingleKey clicked={() => props.clicked(7)}>7</SingleKey>
        <SingleKey clicked={() => props.clicked(8)}>8</SingleKey>
        <SingleKey clicked={() => props.clicked(9)}>9</SingleKey>
        <SingleKey clicked={() => props.clicked("+")}>+</SingleKey>
        <SingleKey clicked={() => props.clicked(4)}>4</SingleKey>
        <SingleKey clicked={() => props.clicked(5)}>5</SingleKey>
        <SingleKey clicked={() => props.clicked(6)}>6</SingleKey>
        <SingleKey clicked={() => props.clicked('-')}>-</SingleKey>
        <SingleKey clicked={() => props.clicked(1)}>1</SingleKey>
        <SingleKey clicked={() => props.clicked(2)}>2</SingleKey>
        <SingleKey clicked={() => props.clicked(3)}>3</SingleKey>
        <SingleKey clicked={() => props.clicked('*')}>x</SingleKey>
        <SingleKey clicked={() => props.clicked(".")}>.</SingleKey>
        <SingleKey clicked={() => props.clicked(0)}>0</SingleKey>
        <SingleKey clicked={() => props.clicked("=")}>=</SingleKey>
        <SingleKey clicked={() => props.clicked('/')}>/</SingleKey>
    </div>
);

export default keyPad;