import React from 'react';
import './AdiBtn.css';
import { ArrowRightAltRounded } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
const AdiBtn = props => {
    const history = useHistory()
    return (
        <div onClick={() => {history.push(props.to)}} className="btncontainer">
            {props.children}
            <ArrowRightAltRounded />
            <div className="btn"></div>
        </div>
    );
};

export default AdiBtn;