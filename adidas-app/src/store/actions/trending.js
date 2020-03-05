import * as actionTypes from './actionTypes';
import React from 'react';
import base from '../../URL/URL';

export const fetchTrendingStart = () => {
    return {
        type: actionTypes.FETCH_TRENDING_START
    };
};

export const fetchTrendingSuccess = (trendingList) => {
    return {
        type: actionTypes.FETCH_TRENDING_SUCCESS,
        trendingList: trendingList
    };
};

export const fetchTrendingFail = () => {
    return {
        type: actionTypes.FETCH_TRENDING_FAIL
    };
};

export const fetchTrending = () => {
    return dispatch => {
        dispatch(fetchTrendingStart())
        base.get('/api/trending')
        .then(res => {
            // console.log(res.data.items)
            dispatch(fetchTrendingSuccess(res.data.items))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchTrendingFail())
        })
    }
};