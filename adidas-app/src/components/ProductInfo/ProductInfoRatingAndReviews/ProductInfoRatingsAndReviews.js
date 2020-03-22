import React from 'react';
import './ProductInfoRatingsAndReviews.css';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Ratings from '../../Ratings/Ratings'
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ReviewPost from './ReviewPost/ReviewPost';

const ProductInfoRatingsAndReviews = (props) => {
    const getRatings = useSelector(state => state.ratingsAndReviews.ratingsProduct)
    const getReviews = useSelector(state => state.ratingsAndReviews.reviewsProduct)
    const loadingRatingsAndReviews = useSelector(state => state.ratingsAndReviews.loading)
    
    if (loadingRatingsAndReviews || !getReviews.reviews || !getRatings.ratingDistribution) {
        return null
    } else {
        return (
            <div className="productinforatingsandreviews">
                {getRatings.overallRating && getRatings.recommendationPercentage && getRatings.ratingDistribution.length > 0 && getReviews.reviews.length > 0 ?
                    <Typography variant="h4" align="center" gutterBottom><strong>Ratings &amp; Reviews</strong></Typography>
                    :
                    <Typography variant="h4" align="center" gutterBottom><strong>No Ratings &amp; Reviews</strong></Typography>
                }
                <div className="ratingreviews">
                    <div>
                        <div className="ratingsstats">

                            {getRatings.overallRating ?
                                <div className="ratingsbox">
                                    <Typography variant="h4" gutterBottom>{getRatings.overallRating}</Typography>
                                    <Ratings value={getRatings.overallRating} />
                                    <Typography variant="subtitle1"><strong>{getRatings.reviewCount}</strong> Reviews</Typography>
                                </div>
                                :
                                null
                            }

                            {getRatings.recommendationPercentage ?
                                <div className="recommendationbox">
                                    <Typography variant="h4" ><strong>{`%${getRatings.recommendationPercentage}`}</strong></Typography>
                                    <Typography variant="subtitle1">of customers recommend this product</Typography>
                                </div>
                                :
                                null
                            }

                        </div>
                        <div>
                            {getRatings.reviewCount ?
                                getRatings.ratingDistribution.map((rating, key) => {
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
                        {getReviews.reviews.length > 0 ?
                            getReviews.reviews.map((post, key) => {
                                return <ReviewPost
                                    key={key}
                                    value={post.rating}
                                    date={post.formattedDate}
                                    title={post.title}
                                    comment={post.text}
                                    isRecommended={post.isRecommended}
                                    username={post.userNickname}
                                />
                            })
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductInfoRatingsAndReviews;