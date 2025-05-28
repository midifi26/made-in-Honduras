import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css"; 

const ProductItem = ({product}) => {
  return <Link to={`/products/${product.name}`}>
    <article>
      <div className="product-img">
        <img src={product.image} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.relevance} ⭐</p>
        <p>Price: ${product.price}</p>
      </div>
    </article>
    
    </Link>
  
};


export default ProductItem;
