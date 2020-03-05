import React from 'react';
import './Landingpage.css';
import AdiBtn from '../../AdiBtn/AdiBtn';
import { Typography } from '@material-ui/core';
import TrendingBar from '../../TrendingBar/TrendingBar';
import AboutUs from '../../AboutUs/AboutUs';
import NavImgLinkSection from '../../NavImgLinkSection/NavImgLinkSection';
import Banner from '../../Banner/Banner';

const landingpage = (props) => {
    return (
        <div>
            <Banner />
            <NavImgLinkSection />
            <AboutUs />
            <TrendingBar />
        </div>
    );
}

export default landingpage;