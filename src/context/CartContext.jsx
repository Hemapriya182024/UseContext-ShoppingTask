import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addProduct = (product) => {
    const existingProduct = products.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setProducts([...products]);
    } else {
      product.quantity = 1;
      setProducts([...products, product]);
    }
    updateCartSummary();
  };

  const removeProduct = (product) => {
    const existingProduct = products.find((item) => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity -= 1;
      setProducts([...products]);
    } else {
      setProducts(products.filter((item) => item.id !== product.id));
    }
    updateCartSummary();
  };

  const updateCartSummary = () => {
    const totalQty = products.reduce((total, product) => total + product.quantity, 0);
    const totalAmt = products.reduce((total, product) => total + product.price * product.quantity, 0);
    setTotalQuantity(totalQty);
    setTotalAmount(totalAmt);
  };

  return (
    <CartContext.Provider value={{ products, totalQuantity, totalAmount, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
