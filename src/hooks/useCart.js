import { db } from "../data/db";
import { useMemo, useState } from "react";

const MAX_ITEMS = 5
const MIN_ITEMS = 1

export const useCart = () => {
  const [data] = useState(db)
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const itemExists = cart.find(guitar => guitar.id === item.id)
    if (itemExists) {
      const updatedCart = cart.map(guitar => {
        if (guitar.id === item.id && guitar.quantity < MAX_ITEMS) {
          return {
            ...guitar,
            quantity: guitar.quantity + 1
          }
        } else {
          return guitar
        }
      })
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(guitar => {
      if (guitar.id === id && guitar.quantity < MAX_ITEMS) {
        return {
          ...guitar,
          quantity: guitar.quantity + 1
        }
      } else {
        return guitar
      }
    })
    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(guitar => {
      if (guitar.id === id && guitar.quantity > MIN_ITEMS) {
        return {
          ...guitar,
          quantity: guitar.quantity - 1
        }
      } else {
        return guitar
      }
    })
    setCart(updatedCart)
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(guitar => guitar.id !== id)
    setCart(updatedCart)
  }

  const cleanCart = () => {
    setCart([])
  }

  const isEmpty = useMemo(() => cart.length === 0, [cart])
  const total = useMemo(() => cart.reduce((accu, guitar) => accu + (guitar.price * guitar.quantity), 0), [cart])

  return {
    data,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cleanCart,
    isEmpty,
    total
  }
}
