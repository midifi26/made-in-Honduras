import React from "react";

const ProductItem = () => {

  const renderProduct = () => {
        if (!product) return <p>Loading products...</p>;
    
        return product.map((p, i) => (
          <div key={i}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>Price: ${p.price}</p>
          </div>
        ));
      };
  return <div>ProductItem
    
  </div>;
};

export default ProductItem;
