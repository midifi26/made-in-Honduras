import React, { useState } from 'react'
import SortButtons from './SortButtons'
import ProductItem from '.ProductItem'

const ProductList = () => {
    const [order, setOrder] = useState('asc')
    const [products, setProducts] = useState({
        field:"",
        direction : "asc"
    })
    
      useEffect(() => {
        const allProduct = async() => {
                const resp = await fetch('http://localhost:3000/api/product');
                const data = await resp.json();
                setProducts(data);
            }
            allProduct();
      },[])
    
    const orderBy = (field)=>{
        let newOrder = "asc";
        if(order.field === field){
            newOrder = order.direction === "asc" ? "desc" : "asc";
        }
        setOrder({field, direction : newOrder});
        fetchProducts(order);
    }    
    
  return (
    <div>
        {renderProduct()}
        <ProductItem products={allProduct}/>
        <SortButtons order={orderBy} />
    </div>
  )
}

export default ProductList
