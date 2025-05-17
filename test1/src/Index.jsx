import React, { useState, useEffect } from 'react';
import Header from './Header';


const Index = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Header />
      <h1>All Products</h1>
         <div className="product-grid">
             <div className="row">
      {products.map(product => (

        <div className="col-md-4" key={product.id}>
            <div style={{ height: '250px', overflow: 'hidden' }}  className=''>

          <img src={product.image} alt={product.title} className='card-img' />
            </div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className='text-center'>
          <button className='btn btn-success '>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
</div>
    </>
  )
}

export default Index
