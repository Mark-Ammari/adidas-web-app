import React, { useEffect, useState } from 'react';
import './ProductInfoRatingsAndReviews.css';
import { Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Ratings from '../../../Ratings/Ratings'
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ReviewPost from './ReviewPost/ReviewPost';
import { useHistory } from 'react-router-dom';
import * as ratingsAndReviewsAction from '../../../../store/actions/ratingsAndReviews';

const ProductInfoRatingsAndReviews = () => {

    const getRatings = useSelector(state => state.ratingsAndReviews.ratingsProduct)
    const ratingDistribution = useSelector(state => state.ratingsAndReviews.distributionList)
    const reviews = useSelector(state => state.ratingsAndReviews.reviewList)
    const setSort = useSelector(state => state.ratingsAndReviews.setSort)

    const history = useHistory()
    const dispatch = useDispatch()

    const [loadMore, setLoadMore] = useState(2)
    useEffect(() => {
        dispatch(ratingsAndReviewsAction.fetchReviews(history.location.search.slice(7), loadMore, 0, setSort))
    }, [dispatch, history.location.search, loadMore, setSort])

    return (
        <>
            <div id="reviews" className="productinforatingsandreviews">
                {getRatings.overallRating && getRatings.recommendationPercentage && ratingDistribution.length > 0 && reviews.length > 0 ?
                    <Typography variant="h4" align="center" gutterBottom><strong>Ratings &amp; Reviews</strong></Typography>
                    :
                    null
                }
                <div className="ratingreviews">
                    <div>
                        <div className="ratingsstats">
                            {
                                getRatings.overallRating ?
                                    <div className="ratingsbox">
                                        <Typography variant="h4" gutterBottom>{getRatings.overallRating}</Typography>
                                        <Ratings value={getRatings.overallRating} />
                                        <Typography variant="subtitle1"><strong>{getRatings.reviewCount}</strong> Reviews</Typography>
                                    </div>
                                    :
                                    null
                            }


                            {
                                getRatings.recommendationPercentage ?
                                    <div className="recommendationbox">
                                        <Typography variant="h4" ><strong>{`%${getRatings.recommendationPercentage}`}</strong></Typography>
                                        <Typography variant="subtitle1">of customers recommend this product</Typography>
                                    </div>
                                    :
                                    null
                            }

                        </div>
                        <div>
                            {
                                getRatings.reviewCount ?
                                    ratingDistribution.map((rating, key) => {
                                        return <RatingBreakdown
                                            rating={`${rating.rating}`}
                                            width={`${(rating.count / (getRatings.ratingDistribution[0].count + getRatings.ratingDistribution[1].count + getRatings.ratingDistribution[2].count + getRatings.ratingDistribution[3].count + getRatings.ratingDistribution[4].count)) * 100 || 0}%`}
                                            key={key}
                                            value={rating.count} />
                                    })
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <div className="reviews">
                       
                        {reviews.length > 0 ?
                            <>
                             <Button
                            onClick={() => dispatch(ratingsAndReviewsAction.setReviewProductNewest())}
                            style={{
                                marginRight: "5px"
                            }} variant="outlined" size="small" color="default">newest</Button>
                        <Button
                            onClick={() => dispatch(ratingsAndReviewsAction.setReviewProductHelpful())}
                            style={{
                                marginRight: "5px"
                            }} 
                            variant="outlined" size="small" color="default">helpful</Button>
                        <Button
                            onClick={() => dispatch(ratingsAndReviewsAction.setReviewProductRelevant())}
                            style={{
                                marginRight: "5px"
                            }} 
                            variant="outlined" size="small" color="default">relevant</Button>
                            { reviews.map((post, key) => {
                                return <ReviewPost
                                    key={key}
                                    value={post.rating}
                                    date={post.formattedDate}
                                    title={post.title}
                                    comment={post.text}
                                    isRecommended={post.isRecommended}
                                    username={post.userNickname}
                                />
                            })}
                            </>
                            : null
                        }
                        {reviews.length >= getRatings.reviewCount ? null :
                            <div onClick={() => { setLoadMore(loadMore + 2) }} className="loadmorebtn"><span>LOAD MORE</span></div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductInfoRatingsAndReviews;