import React from "react";
import useProducts from "../../../hook/home/useProducts";
import Product from "./Product";

type Props = {
  products: any[];
  error: any;
  loading: boolean;
};

function Products({ products, loading, error }: Props) {
  if (loading) {
    return <span>loading....</span>;
  }

  if (error) {
    return <span>here is error....</span>;
  }

  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
