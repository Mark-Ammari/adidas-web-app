import React, { useState } from 'react';
import classes from './Collapsible.module.css';
import { ListItem, ListItemText } from '@material-ui/core';
import { ArrowDropDownRounded, ArrowDropUpRounded } from '@material-ui/icons';

const Collapsible = (props) => {
    const [show, setShow] = useState(true)

    const CollapseHandler = () => {
        setShow(!show)
        let display = document.querySelector(`#collapsible-content-${props.index}`)
        if (show) {
            display.style.display = "block"
        } else {
            display.style.display = "none"
        }
    }

    return (
        <div>
            <ListItem onClick={CollapseHandler} className={classes.Collapsible} button>
                <ListItemText primary={props.title} />
                {show ? <ArrowDropDownRounded /> : <ArrowDropUpRounded />}
            </ListItem>
            <div id={`collapsible-content-${props.index}`} className={classes.CollapsibleContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Collapsible;