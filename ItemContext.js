// src/context/ItemContext.js
import { createContext, useState } from 'react';

const itemContext = createContext(); // default export

const ItemProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setItemsInCart([...itemsInCart, product]);
    setTotalPrice(prev => prev + product.price);
  };

  const removeFromCart = (product) => {
    const filtered = itemsInCart.filter(item => item.id !== product.id);
    setItemsInCart(filtered);
    setTotalPrice(prev => prev - product.price);
  };

  const contextValue = {
    itemsInCart,
    totalPrice,
    addToCart,
    removeFromCart
  };

  return (
    <itemContext.Provider value={contextValue}>
      {children}
    </itemContext.Provider>
  );
};

export { ItemProvider };
export default itemContext;

