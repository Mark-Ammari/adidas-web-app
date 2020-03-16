import React, { useState, useEffect } from 'react';
import './ProductInfo.css';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import ProductInfoMainImg from './ProductInfoComponents/ProductInfoMainImg/ProductInfoMainImg';
import ProductInfoDescription from './ProductInfoComponents/ProductInfoDescription/ProductInfoDescription';
import ProductInfoForm from './ProductInfoComponents/ProductInfoForm/ProductInfoForm';
import TrendingCard from '../TrendingCard/TrendingCard';
import TrendingBar from '../TrendingBar/TrendingBar';
import ProductInfoSpecsMobile from './ProductInfoComponents/ProductInfoSpecsMobile/ProductInfoSpecsMobile';

const ProductInfo = (props) => {
    const searchProduct = useSelector(state => state.searchProduct.searchProduct)
    const loading = useSelector(state => state.searchProduct.loading)
    let [pointer, setPointer] = useState(0)
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
    return (
        <div>
            {loading ? null :
                <>
                    <div className="productinfo">
                        <div className="productinfoimages">
                            <ProductInfoMainImg search={searchProduct["view_list"][pointer]["image_url"]} stacleft={stacLeft} stacright={stacRight} pointer={pointer} />
                            <div className="productinfogallery">
                                {searchProduct["view_list"].map((img, key) => {
                                    return <div><img style={{
                                        width: "100px",
                                        height: "100px"
                                    }} key={key} onClick={() => { setPointer(key) }} src={img["image_url"]} alt="product gallery" />
                                    </div>
                                })}
                            </div>
                        </div>

                        <div>
                            <ProductInfoDescription search={searchProduct} />
                            <ProductInfoForm search={searchProduct} />
                        </div>
                    </div>
                    <div>
                        {searchProduct["product_link_list"].filter(extra => extra.type === "complete-the-look").length >= 1 ?
                            <>
                                <Typography style={{marginTop: "10px"}} align="center" variant="h4">Complete The Look</Typography>
                                <div className="completethelook">
                                    {searchProduct["product_link_list"].filter(extra => extra.type === "complete-the-look").map((item, key) => {
                                        return <TrendingCard key={key} img={item["image"]} name={item.name} id={item.productId} price={'$' + item["pricing_information"]["standard_price"]} />
                                    })}
                                </div>
                            </>
                            : null
                        }
                        <Typography style={{marginTop: "10px"}} align="center" variant="h4">Product Information</Typography>
                        <ProductInfoSpecsMobile
                            text={searchProduct["product_description"].text}
                            producttitle={searchProduct["product_description"].title}
                            src={searchProduct["product_description"]["description_assets"]["image_url"]}>Description</ProductInfoSpecsMobile>
                        <ProductInfoSpecsMobile
                            specs={
                                searchProduct["product_description"]["usps"].map((bullet, key) => {
                                    return <li key={key}><Typography gutterBottom>{bullet}</Typography></li>
                                })
                            }>
                            Specifications
                        </ProductInfoSpecsMobile>
                        <TrendingBar />
                    </div>
                </>
            }
        </div>
    );
};

export default ProductInfo;