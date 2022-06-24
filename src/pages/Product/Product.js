import React from 'react';
import {
    ProductSection,
    ProductTitle,
    ProductWrapper,
    ProductGallery,
    ProductFirst,
    ProductLinks,
    ImgProductMask,
    ProductOverlay,
    ProductSpanName,

} from './ProductElements';



const Product = () => {
  return (
    <>
        <ProductSection>
            <ProductTitle>
                TEAM M11 MERCHANDISE
            </ProductTitle>
            <ProductWrapper>
                <ProductGallery>
                    <ProductFirst>
                        <ProductLinks>
                            <ImgProductMask />
                            <ProductOverlay>
                                <ProductSpanName>
                                    MASK
                                </ProductSpanName>
                            </ProductOverlay>
                        </ProductLinks>
                    </ProductFirst>
                </ProductGallery>
            </ProductWrapper>
        </ProductSection>
    </>
  );
}

export default Product;