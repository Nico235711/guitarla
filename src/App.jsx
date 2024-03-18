import { useState } from "react";
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db"

function App() {

  // state
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const maxItems = 5
  const minItems = 1

  function addToCart(item) {

    const itemExists = cart.findIndex(guitar => guitar.id === item.id)

    if (itemExists >= 0) { // el elemento existe
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    }
    else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter(guitar => guitar.id !== id)
    setCart(updatedCart)
  }

  function incrementQuantity(id) {
    const updatedCart = cart.map(guitar => {
      if (guitar.id === id && guitar.quantity < maxItems) {
        return {
          ...guitar,
          quantity: guitar.quantity + 1 // toma una copia y aumenta la cantidad
        }
      }
      return guitar 
    })
    setCart(updatedCart)
  }

  function decrementQuantity(id) {
    const updatedCart = cart.map(guitar => {
      if (guitar.id === id && guitar.quantity >= minItems) {
        return {
          ...guitar,
          quantity: guitar.quantity - 1 // toma una copia y decrementa la cantidad
        }
      }
      return guitar 
    })
    setCart(updatedCart)
  }

  function cleanCart() {
    setCart([])
  }

  return (
    <>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        cleanCart={cleanCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data?.map(guitar => (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                setCart={setCart} 
                addToCart={addToCart}
              />
            ))
          }
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

export default App
