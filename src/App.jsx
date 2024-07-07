import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useCart } from "./hooks/useCart";


export default function App() {

  const { addToCart, cart, cartTotal, cleanCart, data, decreaseQuantity, increaseQuantity, isEmpty, removeFromCart } = useCart()

  return (
    <>
      <Header
        cart={cart} 
        removeFromCart={removeFromCart}
        cleanCart={cleanCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            // cuando itero, cada elemento debe ser unico por se agrega el key
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
