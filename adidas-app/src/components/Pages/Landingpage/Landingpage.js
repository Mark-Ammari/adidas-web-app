import React from 'react';
import './Landingpage.css';
import AdiBtn from '../../AdiBtn/AdiBtn';
import { Typography } from '@material-ui/core';
import TrendingBar from '../../TrendingBar/TrendingBar';
import AboutUs from '../../AboutUs/AboutUs';
import NavImgLinkSection from '../../NavImgLinkSection/NavImgLinkSection';

const landingpage = (props) => {
    return (
        <>
        <div className="banner">
            <div className="btncontain">
                <h2 className="bannerslogan" >That Boost Hype Is Real</h2>
                <div>
                    <AdiBtn to="/men">Shop Men</AdiBtn>
                    <AdiBtn to="/women">Shop Women</AdiBtn>
                </div>
            </div>
        </div>
        <NavImgLinkSection />
        <AboutUs />
        <TrendingBar />
        </>
    );
}

export default landingpage;