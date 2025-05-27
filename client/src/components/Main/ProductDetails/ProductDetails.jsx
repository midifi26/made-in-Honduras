import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/product/${name}`);
        const data = await res.json();
        setProduct(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error("Error al cargar detalles:", error);
      }
    };
    fetchDetails();
  }, [name]);

  return (
    <div>
      {product ? (
        <div className="product-details">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          <p>Relevance: {product.relevance}</p>
          <p>Provider: {product.name_provider}</p>
          <p>CIF: {product.cif}</p>
          <p>Address: {product.address}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};


export default ProductDetails;
