import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GetProductsOutput, GET_PRODUCTS } from "../../apollo/home/query";
import * as GetProducts from "../../model/product/product";

function useProducts() {
  const [products, setProducts] = useState<GetProducts.Product[]>([]);

  const { loading, error } = useQuery(GET_PRODUCTS, {
    onCompleted: (data) => {
      if (!data.getProducts || !data.getProducts.products) {
        return;
      }
      const output: GetProductsOutput = data;

      setProducts(output.getProducts.products);
    },
  });

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;
