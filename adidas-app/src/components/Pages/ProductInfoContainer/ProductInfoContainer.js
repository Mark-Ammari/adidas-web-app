import React, { useEffect, useState } from 'react';
import './ProductInfoContainer.css';
import { useDispatch } from 'react-redux';
import * as searchProductAction from '../../../store/actions/searchProduct';
import * as sizesProductAction from '../../../store/actions/sizesProduct';
import * as ratingsAndReviewsAction from '../../../store/actions/ratingsAndReviews';
import ProductInfo from '../../ProductInfo/ProductInfo';

const ProductInfoContainer = (props) => {
    const dispatch = useDispatch()
    // const [loadMore, setLoadMore] = useState(2)

    useEffect(() => {
        dispatch(searchProductAction.fetchProductSearch(props.match.params.id))
        dispatch(sizesProductAction.fetchProductSizes(props.match.params.id))
        dispatch(ratingsAndReviewsAction.fetchRatings(props.location.search.slice(7)))
    }, [dispatch, props.match.params.id, props.location.search]);

    // useEffect(() => {
    //     dispatch(ratingsAndReviewsAction.fetchReviews(props.location.search.slice(7), loadMore))
    // }, [dispatch, props.location.search, loadMore])
    
    return (
        <div>
            {/* onClick={() => {setLoadMore(loadMore + 2)}} */}
            <ProductInfo match={props.match.params.id} />
        </div>
    )
}

export default ProductInfoContainer;