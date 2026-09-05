import { useEffect } from "react"
import { useState } from "react"

const MAX_ITEMS = 5
const MIN_ITEMS = 1
const initialCart = JSON.parse(localStorage.getItem('guitar-cart')) || []

export const useCart = () => {
  const [cart, setCart] = useState(initialCart)
  useEffect(() => {
    localStorage.setItem('guitar-cart', JSON.stringify(cart))
  }, [cart]);
  const handleAddToCart = (item) => {
    if (cart.some(guitar => guitar.id === item.id)) {
      const updatedCart = cart.map(guitar => {
        return guitar.id === item.id && guitar.quantity < MAX_ITEMS 
          ? { ...guitar, quantity: guitar.quantity + 1 } 
          : guitar
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }
  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(guitar => guitar.id !== id)
    setCart(updatedCart)
  }
  const handleIncreaseQuantity = (id) => {
    const updatedCart = cart.map(guitar => {
      return guitar.id === id && guitar.quantity < MAX_ITEMS
        ? { ...guitar, quantity: guitar.quantity + 1 } 
        : guitar
    })
    setCart(updatedCart)
  }
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map(guitar => {
      return guitar.id === id && guitar.quantity > MIN_ITEMS
        ? { ...guitar, quantity: guitar.quantity - 1 } 
        : guitar
    })
    setCart(updatedCart)
  }
  const handleClearCart = () => setCart([])
  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleClearCart
  }
}
