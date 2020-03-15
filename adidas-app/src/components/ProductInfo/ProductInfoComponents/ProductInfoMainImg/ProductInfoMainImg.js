import React from 'react';
import "./ProductInfoMainImg.css";
import { IconButton } from '@material-ui/core';
import { ArrowRight, ArrowLeft } from '@material-ui/icons';

const ProductInfoMainImg = props => {
    return (
        <div className="productinfomainimg">
            <div 
            style={{ 
                backgroundImage: `url(${props.search["view_list"][props.pointer]["image_url"]})` 
            }} 
            className="productinfoimagecontainer"
            >
                <div className="staccontainer">
                    <IconButton onClick={props.stacleft}>
                        <ArrowLeft fontSize="large" />
                    </IconButton>
                    <IconButton onClick={props.stacright}>
                        <ArrowRight fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoMainImg;