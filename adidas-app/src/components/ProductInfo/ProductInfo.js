import React, { useState, useEffect } from 'react';
import './ProductInfo.css';
import { useSelector } from 'react-redux';
import { Typography, useMediaQuery } from '@material-ui/core';
import ProductInfoMainImg from './ProductInfoComponents/ProductInfoMainImg/ProductInfoMainImg';
import ProductInfoDescription from './ProductInfoComponents/ProductInfoDescription/ProductInfoDescription';
import ProductInfoForm from './ProductInfoComponents/ProductInfoForm/ProductInfoForm';
import TrendingBar from '../TrendingBar/TrendingBar';
import ProductInfoSpecsMobile from './ProductInfoComponents/ProductInfoSpecsMobile/ProductInfoSpecsMobile';
import ProductInfoSpecsDesktop from './ProductInfoComponents/ProductInfoSpecsDesktop/ProductInfoSpecsDesktop';
import usePrevious from '../../hooks/usePrevious';
import ProductInfoRatingsAndReviews from './ProductInfoComponents/ProductInfoRatingAndReviews/ProductInfoRatingsAndReviews';

const ProductInfo = (props) => {
    const breakpoint = useMediaQuery('(min-width:992px)');
    const searchProduct = useSelector(state => state.searchProduct.searchProduct)
    const loading = useSelector(state => state.searchProduct.loading)
    const loadingRatingsAndReviews = useSelector(state => state.ratingsAndReviews.loading)

    let [pointer, setPointer] = useState(0)

    let [match, setMatch] = useState(props.match)
    let previous = usePrevious(match)

    const stacRight = () => {
        if (pointer >= searchProduct["view_list"].length - 1) {
            setPointer(0)
        } else { setPointer(pointer += 1) }
    }
    const stacLeft = () => {
        if (pointer <= 0) {
            setPointer(searchProduct["view_list"].length - 1)
        } else { setPointer(pointer -= 1) }
    }

    useEffect(() => {
        setMatch(props.match)
        if (previous !== match) {
            setPointer(0)
        }
    }, [previous, match, props.match])

    return (
        <div>
            {loading ? null :
                <>
                    <div className="productinfo">
                        <div className="productinfoimages">
                            <ProductInfoMainImg search={searchProduct["view_list"][pointer]["image_url"]} stacleft={stacLeft} stacright={stacRight} />
                            <div className="productinfogallery">
                                {searchProduct["view_list"].map((img, key) => {
                                    return <div key={key}><img
                                        onClick={() => { setPointer(key) }}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                        }} src={img["image_url"]} alt="product gallery" />
                                    </div>
                                })}
                            </div>
                        </div>

                        <div>
                            <ProductInfoDescription />
                            <ProductInfoForm />
                        </div>
                    </div>
                    <div>
                        <Typography style={{ marginTop: "10px" }} align="center" variant="h4"><strong>Product Details</strong></Typography>
                        {breakpoint ? <ProductInfoSpecsDesktop /> :
                            <>
                                {searchProduct.hasOwnProperty("product_description") ?
                                    <ProductInfoSpecsMobile type="description">Description</ProductInfoSpecsMobile> :
                                    null
                                }
                                {searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("usps") ?
                                    <ProductInfoSpecsMobile type="specifications">Specifications</ProductInfoSpecsMobile> :
                                    null
                                }
                                {searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("product_highlights") ?
                                    <ProductInfoSpecsMobile type="hightlights">Highlights</ProductInfoSpecsMobile> :
                                    null
                                }
                            </>
                        }
                        {/* onClick={props.onClick} */}
                        <ProductInfoRatingsAndReviews  />
                        <TrendingBar />
                    </div>
                </>
            }
        </div>
    );
};

export default ProductInfo;