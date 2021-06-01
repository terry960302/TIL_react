import React from "react";
import styled from "styled-components";

type Props = {
  product: any;
};

function Product({ product }: Props) {
  return (
    <ProductWrapper>
      <div>{product}</div>
    </ProductWrapper>
  );
}

export default Product;

const ProductWrapper = styled.div`
  width: 300px;
  height: 400px;
`;
