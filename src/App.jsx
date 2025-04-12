import { useState } from "react"
import { Guitar } from "./components/Guitar"
import { Header } from "./components/Header"
import { db } from "./data/db"

const MAX_ITEMS = 5
const MIN_ITEMS = 1

export const App = () => {
  const [data] = useState(db)
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    // verificar si ya existe
    const itemExists = cart.find(guitar => guitar.id === item.id)
    if (itemExists) {
      if (itemExists.quantity >= MAX_ITEMS) return
      const updateCart = cart.map(guitar => {
        if (guitar.id === item.id) {
          return {
            ...guitar,
            quantity: guitar.quantity + 1,
          }
        }
        return guitar
      })
      setCart(updateCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(guitar => guitar.id !== id)
    setCart(updatedCart)
  }

  const cleanCart = () => setCart([])

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(guitar => {
      if (guitar.id === id && guitar.quantity < MAX_ITEMS) {
        return {
          ...guitar,
          quantity: guitar.quantity + 1
        }
      }
      return guitar
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
      }
      return guitar
    })
    setCart(updatedCart)
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart} 
        cleanCart={cleanCart} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar} 
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}
