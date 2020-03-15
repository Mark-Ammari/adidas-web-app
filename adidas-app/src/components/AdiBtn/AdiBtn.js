import React, { useState } from 'react';
import './AdiBtn.css';
import { ArrowRightAltRounded } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

const AdiBtn = props => {
    const history = useHistory()
    let buttonType = null
    switch (props.type) {
        case ("navButton"):
            buttonType = <div style={{ width: props.width || "125px" }} onClick={() => { history.push(props.to) }} className="btncontainer">
                <div className="btntext">
                    <span>{props.children}</span>
                    <span><ArrowRightAltRounded /></span>
                </div>
            </div>
            break;
        case ("button"):
            buttonType = <div style={{ width: props.width || "125px" }} onClick={() => { history.push(props.to) }} className="btncontainer">
                <div className="btntext">
                    <span>{props.children}</span>
                    <span><ArrowRightAltRounded /></span>
                </div>
            </div>
            break;
        default: buttonType = <div style={{ width: props.width || "125px" }} onClick={() => { history.push(props.to) }} className="btncontainer">
            <div className="btntext">
                <span>{props.children}</span>
                <span><ArrowRightAltRounded /></span>
            </div>
        </div>
    }
    return (
        <div>
            {buttonType}
        </div>
    );
};

export default AdiBtn;