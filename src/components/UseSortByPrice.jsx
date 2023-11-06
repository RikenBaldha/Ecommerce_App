import React, { useState } from "react";

// Custom hook for sorting products by price
const useSortByPrice = (initialProducts) => {
  const [products, setProducts] = useState(initialProducts);

  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = Number(a.product_price.replace(/[^0-9.-]+/g, ""));
      const priceB = Number(b.product_price.replace(/[^0-9.-]+/g, ""));
      return priceA - priceB;
    });
    setProducts(sortedProducts);
  };

  return { products, sortByPrice };
};

export default useSortByPrice