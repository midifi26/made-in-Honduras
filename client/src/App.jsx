import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductList from './components/Main/ProductList/ProductList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [product, setProduct] = useState()

  // useEffect(() => {
  //   const allProduct = async() => {
  //           const resp = await fetch('http://localhost:3000/api/product');
  //           const data = await resp.json();
  //           setProduct(data);
  //       }
  //       allProduct();
  // },[])

  //   const renderProduct = () => {
  //   if (!product) return <p>Loading products...</p>;

  //   return product.map((p, i) => (
  //     <div key={i}>
  //       <h3>{p.name}</h3>
  //       <p>{p.description}</p>
  //       <p>Price: ${p.price}</p>
  //     </div>
  //   ));
  // };

  return (
    
    <>
    <ProductList />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
