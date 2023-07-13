import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleBuyNow = () => {
    // Logic to handle the "Buy Now" button click
  };

  const handleAddToCart = () => {
    // Logic to handle the "Add to Cart" button click
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <div className="button-container">
            <button onClick={handleBuyNow}>Buy Now</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
