import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { products, totalQuantity, totalAmount, addProduct, removeProduct } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Cart-items:</h2>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
        
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id} className="cart-item">
            
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>Title:</h3>
                <h3>{product.title}</h3>
                <h4>Description:</h4>
                <p>{product.description}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => removeProduct(product)}>Remove</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => addProduct(product)}>Add</button>
                </div>
                <p className="cart-item-price">${(product.price * product.quantity).toFixed(2)}</p>
                <button className="remove-item" onClick={() => removeProduct(product)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Subtotal: ${totalAmount.toFixed(2)}</p>
            <p>Shipping: FREE</p>
            <p>Total: ${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
