import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Product.css';

const Product = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>Product Name:</h3>
      <h3>{product.title}</h3>
      <h4>Description:</h4>
      <p>{product.description}</p>
      
      <p>Price :${product.price.toFixed(2)}</p>
      <button  className='button'onClick={() => addProduct(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
