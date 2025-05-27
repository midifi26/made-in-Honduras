import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
  return <section>
    <Link to={`/products/${product.name}`}>
    <article>
      <h3>{product.name}</h3>
      <p>{product.relevance}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} />
    </article>
    </Link>
  </section>;
  
};


export default ProductItem;
