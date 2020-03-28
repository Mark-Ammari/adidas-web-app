import React from 'react';
import './TrendingBar.css';
import { useSelector } from 'react-redux';
import TrendingCard from '../TrendingCard/TrendingCard';
import { Typography, ListItemSecondaryAction } from '@material-ui/core';

const TrendingBar = (props) => {
    const trendingList = useSelector(state => state.trendingList.trendingList)
    const loading = useSelector(state => state.trendingList.loading)
    return (
        <>
            <div className="trendingtitle">
                <Typography variant="h4"><strong>What's Trending</strong></Typography>
            </div>
            <div className="trendingbar">
                {loading ? null :
                    trendingList.items.map((item, key) => {
                        return <TrendingCard key={key} query={item.model} img={item["image-url"]} name={item.name} nameuri={item.name.split(' ').join('-').split('/').join('-')} division={item.division} id={item.article} price={'$'+item["current-price"]} />
                    })}
            </div>
        </>
    );
};

export default TrendingBar;