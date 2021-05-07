import React from "react";
import useProducts from "../../../hook/home/useProducts";
import Products from "../presentation/Products";

function ProductsContainer() {
  const { products, loading, error } = useProducts();
  return (
    <div>
      <Products products={products} loading={loading} error={error} />
    </div>
  );
}

export default ProductsContainer;
