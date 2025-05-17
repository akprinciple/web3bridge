import React, { useState, useEffect } from 'react';
import Header from './Header';
import CartIcon from './CartIcon';


const Index = () => {
    const [products, setProducts] = useState([]);

   const [cart, setCart] = useState(() => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
});

// Update localStorage whenever cart changes
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

// Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
const addToCart = (product) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);

    if (existingItem) {
      return prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    return [...prevCart, { ...product, quantity: 1 }];
  });
};

  return (
    <>
      <Header />
      <div class="p-3 text-end">
        <CartIcon cart={cart} />

        {/* <button type="button" class="btn btn-outline-primary me-2"><i className='fas fa-cart-shopping'></i></button> */}
      </div>
      <h1>All Products</h1>
         <div className="product-grid">
             <div className="row">
      {products.map(product => (

        <div className="col-md-4 mb-3" key={product.id}>
            <div style={{ height: '250px', overflow: 'hidden' }}  className=''>

          <img src={product.image} alt={product.title} className='card-img' />
            </div>
          <h5>{product.title}</h5>
          <p>{product.description.slice(0, 200) + "..."}</p>
          <p className='text-center'>Price: ${product.price}</p>
          <div className='text-center'>
          <button className='btn btn-primary '  onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
</div>
    </>
  )
}

export default Index
