import React from 'react';
import './ProductListProductCardSkeleton.css';

const ProductListProductCardSkeleton = () => {
    return (
        <div className="productlistproductcardskeleton">
            <div className="productlistproductcardskeletonimg"></div>
            <div className="productlistproductcardmarginskeleton">
                <p></p>
                <p></p>    
                <p></p>
                <p></p>
            </div>
    </div>
    )
}

export default ProductListProductCardSkeleton;