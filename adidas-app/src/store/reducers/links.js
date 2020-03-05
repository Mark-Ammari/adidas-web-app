import * as actionTypes from '../actions/actionTypes';
import React from 'react';

const initialState = {
    menData: {},
    womenData: {},
    kidsData: {},
    loading: true
};

const linksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LINKS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_LINKS_SUCCESS:
            return {
                menData: action.menData,
                womenData: action.womenData,
                kidsData: action.kidsData,
                loading: false
            };
        case actionTypes.FETCH_LINKS_FAIL:
            return {
                ...state,
                loading: false
            };

        default: return state;
    };
};

export default linksReducer;