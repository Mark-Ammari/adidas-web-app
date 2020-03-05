import React from 'react';
import './Banner.css';
import AdiBtn from '../AdiBtn/AdiBtn';

const Banner = () => {
    return (
        <div className="banner">
            <div className="btncontain">
                <h2 className="bannerslogan" >That Boost Hype Is Real</h2>
                <div>
                    <AdiBtn to="/men">Shop Men</AdiBtn>
                    <AdiBtn to="/women">Shop Women</AdiBtn>
                </div>
            </div>
        </div>
    );
}

export default Banner;