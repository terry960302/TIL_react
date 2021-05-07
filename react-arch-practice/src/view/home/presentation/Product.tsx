import React from "react";
import * as StyledProduct from "./Product.styled";

type Props = {
  product: any;
};

function Product({ product }: Props) {
  return (
    <StyledProduct.ProductWrapper>
      <div>{product}</div>
    </StyledProduct.ProductWrapper>
  );
}

export default Product;
