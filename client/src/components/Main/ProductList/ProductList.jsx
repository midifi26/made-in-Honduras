import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SortButtons from './SortButtons'
import ProductItem from './ProductItem'
import Search from './Search'

const ProductList = () => {
    
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState({
        field:"",
        direction : "asc"
    })
      const getQueryParams = (searchTerm) => {
    if (!searchTerm) return '';

    if (/^\d+$/.test(searchTerm)) {
      return `price=${encodeURIComponent(searchTerm)}`;
    }

    // Por defecto, búsqueda por nombre
    return `name=${encodeURIComponent(searchTerm)}`;
  };
    const queryParams = getQueryParams(search);
      useEffect(() => {
        const allProduct = async() => {
            try {
                const resp = await fetch(`http://localhost:3000/api/product?${queryParams}&sortField=${order.field}&sortOrder=${order.direction}`);
                const data = await resp.json();
                setProducts(data);
            } catch (error) {
              console.error(error);
            }
        };
        allProduct();
      },[search,order])
    
    const orderBy = (field)=>{
        setOrder(lastOrder=> {
        let newOrder = "asc";
        if(order.field === field){
            newOrder = lastOrder.direction === "asc" ? "desc" : "asc";
        }
        return {field, direction : newOrder};
    });   
    };

    // const searchProduct = products.filter(product => {
    //     const term = search.toLowerCase();
    //     return (
    //         product.name.toLowerCase().includes(term) ||
    //         product.name_provider.toLowerCase().includes(term) ||
    //         product.price.toString().includes(term)
    //     );
    // });
    
  return (
    <div>
        <Search onSearch={setSearch}/>
        <SortButtons order={orderBy} />
            {products.map(product => (
        <ProductItem key={uuidv4()} product={product} />
      ))}
      
    </div>
  )
}

export default ProductList
