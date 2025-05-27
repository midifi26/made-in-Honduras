import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SortButtons from './SortButtons'
import ProductItem from './ProductItem'
import Search from './Search'
import Pagination from '../Pagination'


const ProductList = () => {
    
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState({
        field:"",
        direction : "asc"
    })
  const [page, setPage] = useState(2)
  const limit = 10

  const getQueryParams = (searchTerm) => {
    if (!searchTerm) return '';

    if (/^\d+$/.test(searchTerm)) {
      return `price=${encodeURIComponent(searchTerm)}`;
    }
    return `name=${encodeURIComponent(searchTerm)}`;
  };

    const queryParams = getQueryParams(search);

      useEffect(() => {
        const allProduct = async() => {
            try {
                const resp = await fetch(`http://localhost:3000/api/product?${queryParams}&sortField=${order.field}&sortOrder=${order.direction}&page=${page}&limit=${limit}`);
                const data = await resp.json();
                setProducts(Array.isArray(data.products) ? data.products : []);
                window.scrollTo(0, 0);
            } catch (error) {
              console.error(error);
            }
        };
        allProduct();
      },[search,order, page])
    
    const orderBy = (field)=>{
        setOrder(lastOrder=> {
        let newOrder = "asc";
        if(order.field === field){
            newOrder = lastOrder.direction === "asc" ? "desc" : "asc";
        }
        return {field, direction : newOrder};
    });   
    };
    
  return (
    <div>
      
        <h1>Caprichito Catracho</h1>
        <Search onSearch={setSearch}/>
        <SortButtons order={orderBy} />
        {products.length === 0 ? (
          <>
      <p>No se encontró el producto</p>
      <img src='https://www.beta.crystalcloud.com.mx/images/no-results.png' />
      </>
    ) : (
      products.map(product => (
        <ProductItem key={uuidv4()} product={product} />
      ))
    )}

        <Pagination page={page} setPage={setPage} hasMore={products.length === limit} />
      
    </div>
  )
}

export default ProductList;
