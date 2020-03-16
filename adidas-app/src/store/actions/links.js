import * as actionTypes from './actionTypes';
import base from '../../URL/URL';

export const fetchLinksStart = () => {
    return {
        type: actionTypes.FETCH_LINKS_START
    };
};

export const fetchLinksSuccess = (menData, womenData, kidsData) => {
    return {
        type: actionTypes.FETCH_LINKS_SUCCESS,
        menData: menData,
        womenData: womenData,
        kidsData: kidsData
    };
};

export const fetchLinksFail = () => {
    return {
        type: actionTypes.FETCH_LINKS_FAIL
    };
};

export const fetchLinks = () => {
    return dispatch => {
        dispatch(fetchLinksStart())
        base.get('/api/adidas')
        .then(res => {
            // console.log(res)
            dispatch(fetchLinksSuccess(res.data[0].men, res.data[0].women, res.data[0].kids))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchLinksFail())
        })
    }
};