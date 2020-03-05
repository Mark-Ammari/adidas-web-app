import React, { useContext } from 'react';
import './Footer.css';
import github from '../../assets/github.svg';
import sourcecode from '../../assets/sourcecode.svg';


const Footer = () => {
    return (
        <footer 
        className="Footer">
            <p>Created by Mark Ammari</p>
            <div>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Mark-Ammari"><img src={github} alt="github" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Mark-Ammari/adidas-web-app"><img src={sourcecode} alt="source-code" /></a>
            </div>
        </footer>
    );
};

export default Footer;