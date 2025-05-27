import React from "react";
import  ProductList from "../Main/ProductList";
import ProductDetails from "./ProductDetails";
import Pagination from "./Pagination";
const Main = () => {
  return <div>
    <ProductList />
    <ProductDetails />
    <Pagination  />
      </div>;
};

export default Main;
