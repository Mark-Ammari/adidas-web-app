import React from 'react';
import './Landingpage.css';
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