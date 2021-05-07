import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CREATE } from "../../apollo/home/query";

function useProducts() {
  const [products, setProducts] = useState<any[]>([]);

  const { loading, error } = useQuery(CREATE, {
    onCompleted: (res) => {
      setProducts(res);
    },
    onError: (err) => {
      alert(err);
    },
  });

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;
