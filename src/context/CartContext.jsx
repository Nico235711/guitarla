import { createContext } from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const { addToCart, cart, cartTotal, cleanCart, data, decreaseQuantity, increaseQuantity, isEmpty, removeFromCart } = useCart()

  return (
    <CartContext.Provider value={{
      addToCart,
      cart,
      cartTotal,
      cleanCart,
      data,
      decreaseQuantity,
      increaseQuantity,
      isEmpty,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
}