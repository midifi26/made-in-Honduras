import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/product/${name}`);
        const data = await res.json();
        if (data && !data.error) {
          setProduct(data.products[0]);
        }
      } catch (error) {
        console.error("Error al cargar detalles:", error);
      }
    };
    fetchDetails();
  }, [name]);
const handleBack = () => {
    navigate(-1); // 2. Vuelve a la página anterior
  };

  return (
    <>
    <h1>Caprichito Catracho</h1>
    <div>
      <button onClick={handleBack}>Volver</button>
      {product ? (
        <div className="product-details">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          <p>Relevance: {product.relevance} ⭐</p>
          <p>Provider: {product.name_provider}</p>
          <p>CIF: {product.cif}</p>
          <p>Address: {product.address}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
    </>
  );
};


export default ProductDetails;
