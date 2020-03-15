import React, { useState } from 'react';
import './ProductInfo.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Typography, IconButton, TextField } from '@material-ui/core';
import { ArrowRight, ArrowLeft } from '@material-ui/icons';
import ProductInfoMainImg from './ProductInfoComponents/ProductInfoMainImg/ProductInfoMainImg';
import ProductInfoDescription from './ProductInfoComponents/ProductInfoDescription/ProductInfoDescription';
import ProductInfoForm from './ProductInfoComponents/ProductInfoForm/ProductInfoForm';
import TrendingCard from '../TrendingCard/TrendingCard';
import NavBreadcrumbs from '../NavBreadcrumbs/NavBreadcrumbs';
import ProductInfoSpecs from './ProductInfoComponents/ProductInfoSpecs/ProductInfoSpecs';

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
                            <ProductInfoMainImg search={searchProduct} stacleft={stacLeft} stacright={stacRight} pointer={pointer} />
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
                    {searchProduct["product_link_list"].filter(extra => extra.type === "complete-the-look").length > 1 ?
                            <>
                                <Typography align="center" variant="h4">Complete The Look</Typography>
                                <div className="completethelook">
                                    {searchProduct["product_link_list"].filter(extra => extra.type === "complete-the-look").map((item, key) => {
                                        return <TrendingCard key={key} img={item["image"]} name={item.name} id={item.productId} price={'$' + item["pricing_information"]["standard_price"]} />
                                    })}
                                </div>
                            </>
                            : null
                        }
                        <ProductInfoSpecs />
                    </div>
                </>
            }
        </div>
    );
};

export default ProductInfo;