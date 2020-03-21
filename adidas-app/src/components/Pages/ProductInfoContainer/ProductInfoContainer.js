import React, { useEffect } from 'react';
import './ProductInfoContainer.css';
import { useDispatch } from 'react-redux';
import * as searchProductAction from '../../../store/actions/searchProduct';
import * as sizesProductAction from '../../../store/actions/sizesProduct';
import * as ratingsAndReviewsAction from '../../../store/actions/ratingsAndReviews';
import ProductInfo from '../../ProductInfo/ProductInfo';

const ProductInfoContainer = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchProductAction.fetchProductSearch(props.match.params.id))
        dispatch(sizesProductAction.fetchProductSizes(props.match.params.id))
        dispatch(ratingsAndReviewsAction.fetchReviews(props.match.params.id))
        dispatch(ratingsAndReviewsAction.fetchRatings(props.match.params.id))
    }, [dispatch, props.match.params.id]);
    return (
        <div>
            <ProductInfo match={props.match.params.id} />
        </div>
    )
}

export default ProductInfoContainer;