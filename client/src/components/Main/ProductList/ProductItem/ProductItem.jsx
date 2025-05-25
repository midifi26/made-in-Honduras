import React from "react";

const ProductItem = ({product}) => {
  return <section>
    <article>
      <h3>{product.name}</h3>
      <p>{product.image}</p>
      <p>Price: ${product.price}</p>
    </article>
  </section>;
};

export default ProductItem;
