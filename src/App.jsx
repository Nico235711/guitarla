import { useState } from "react";
import { Guitar } from "./components/Guitar";
import { Header } from "./components/Header";
import { db } from "./data/db";
import { useEffect } from "react";

const MAX_ITEMS = 5
const MIN_ITEMS = 1
const initialCart = JSON.parse(localStorage.getItem('guitar-cart')) || []

export function App() {
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
  return (
    <>
      <Header
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart} 
        onIncreaseQuantity={handleIncreaseQuantity} 
        onDecreaseQuantity={handleDecreaseQuantity} 
        onClearCart={handleClearCart} 
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {db.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}
