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
        console.log(getReviews.review, getRatings.ratingDistribution)
        return null
    } else {
        console.log(getReviews.review, getRatings.ratingDistribution)
        return (
            <div className="productinforatingsandreviews">
                <Typography variant="h5" gutterBottom><strong>Ratings &amp; Reviews</strong></Typography>
                <div className="ratingsstats">
                    <div className="ratingsbox">
                        <Typography variant="h4" gutterBottom>{getRatings.overallRating}</Typography>
                        <Ratings value={getRatings.overallRating} />
                        <Typography variant="subtitle1"><strong>{getRatings.reviewCount}</strong> Reviews</Typography>
                    </div>
                    {getRatings.recommendationPercentage ?
                        <div className="recommendationbox">
                            <Typography variant="h4" ><strong>{`%${getRatings.recommendationPercentage}`}</strong></Typography>
                            <Typography variant="subtitle1">of customers recommend this product</Typography>
                        </div>
                        :
                        <div className="recommendationbox">
                            <Typography variant="h4" ><strong>0%</strong></Typography>
                            <Typography variant="subtitle1">of customers recommend this product</Typography>
                        </div>
                    }
                </div>
                <div>
                    {getRatings.ratingDistribution.length > 0 ?
                        getRatings.ratingDistribution.map((rating, key) => {
                            console.log((rating.count / (getRatings.ratingDistribution[0].count + getRatings.ratingDistribution[1].count + getRatings.ratingDistribution[2].count + getRatings.ratingDistribution[3].count + getRatings.ratingDistribution[4].count)) * 100)
                            return <RatingBreakdown
                                width={`${(rating.count / (getRatings.ratingDistribution[0].count + getRatings.ratingDistribution[1].count + getRatings.ratingDistribution[2].count + getRatings.ratingDistribution[3].count + getRatings.ratingDistribution[4].count)) * 100 || 0}%`}
                                key={key}
                                value={rating.count} />
                        })
                        :
                        null
                    }
                </div>
                <div>
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
        );
    }
};

export default ProductInfoRatingsAndReviews;