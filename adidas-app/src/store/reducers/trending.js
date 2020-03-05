import React from 'react';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trendingList: [],
    loading: true
};

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRENDING_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_TRENDING_SUCCESS:
            return {
                trendingList: action.trendingList,
                loading: false
            };
        case actionTypes.FETCH_TRENDING_FAIL:
            return {
                ...state,
                loading: false
            };

        default: return state;
    }
};

export default trendingReducer;