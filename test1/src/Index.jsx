import React from 'react'
import Header from './Header'
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
}
const Index = (prop) => {
  return (
   <>
    <Header />
    <h1>All Products</h1>
     {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
   </>
     )
}

export default Index

