import React from 'react';
import TrendingBar from '../../TrendingBar/TrendingBar';
import AboutUs from '../../AboutUs/AboutUs';
import NavImgLinkSection from '../../NavImgLinkSection/NavImgLinkSection';
import Banner from '../../Banner/Banner';

const landingpage = () => {
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