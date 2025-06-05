import { useMemo, useState } from "react";
import { db } from "../data/db";

const MAX_ITEMS = 5
const MIN_ITEMS = 1
const INITIAL_CART = () => {
  const localStorageCart = localStorage.getItem("cart-guitar")
  return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const useCart = () => {
  const [data] = useState(db)
  const [cart, setCart] = useState(INITIAL_CART)

  const addToCart = (item) => {
    const itemExists = cart.find(guitar => guitar.id === item.id)
    if (itemExists) {
      const updatedCart = cart.map(guitar => (
        guitar.id === item.id && guitar.quantity < MAX_ITEMS
          ? { ...guitar, quantity: guitar.quantity + 1 }
          : guitar
      ))
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(guitar => guitar.id !== id)
    setCart(updatedCart)
  }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(guitar => guitar.id === id && guitar.quantity < MAX_ITEMS ? {...guitar, quantity: guitar.quantity + 1 } : guitar)
    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(guitar => guitar.id === id && guitar.quantity > MIN_ITEMS ? {...guitar, quantity: guitar.quantity - 1 } : guitar)
    setCart(updatedCart)
  }

  const cleanCart = () => setCart([])
  const isEmpty = useMemo(() => cart.length === 0, [cart])
  const cartTotal = useMemo(() => cart.reduce((accu, guitar) => accu + (guitar.quantity * guitar.price), 0), [cart])

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    isEmpty,
    cartTotal,
  }
}
