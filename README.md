<h2>Carrito de Compras con React 🎸🛒</h2>

<p>Este proyecto es un carrito de compras desarrollado en React, que tiene como objetivo consolidar conceptos básicos y fundamentales de la biblioteca. Durante el desarrollo, puse en práctica diversas funcionalidades que React ofrece, enfocándome en entender cómo funcionan los componentes, JSX, hooks y otras herramientas clave.</p>

#

<h3>🛠️ Tecnologías utilizadas</h3>

- React: Biblioteca principal para la creación de la interfaz.

- JavaScript: Lenguaje base para la lógica del proyecto.

- HTML y CSS: Para estructurar y estilizar la aplicación.

- Vite: Herramienta de desarrollo rápido para React.

#

<h3>🚀 Características del proyecto</h3>

<p>
    Visualización de una lista de productos disponibles.
    Agregar y eliminar productos del carrito.
    Actualización en tiempo real de la cantidad de productos y el precio total.
    Diseño modular para mantener el código organizado y reutilizable.
    
</p>

#

<h3>📚 Conceptos aprendidos</h3>

<h4>Componentes</h4>

<p>Aprendí a estructurar la interfaz dividiendo el proyecto en piezas reutilizables, como el carrito, la lista de productos y los botones.</p>

        const Product = ({ name, price, onAdd }) => (
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        );

<h4>JSX</h4>

<p>
    Uso de sintaxis JSX para combinar lógica y diseño en una estructura legible.
    Comprendí cómo mapear listas de datos y condicionales dentro de JSX.
    
</p>

<h4>Hooks</h4>

<p>
    useState: Para manejar el estado del carrito y los productos seleccionados.
    
</p>

        const [cart, setCart] = useState([]);

<p>useEffect: Para realizar acciones secundarias, como actualizar el total del carrito.</p>

<h4>State Derivado</h4>

<h4>Calculé información derivada, como el precio total del carrito, basado en el estado existente.</h4>

        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

<h4>Custom Hooks</h4>

<p>Creé un hook personalizado para manejar la lógica del carrito, encapsulando funcionalidades como agregar y eliminar productos.</p>

        const useCart = () => {
            const [cart, setCart] = useState([]);
            const addToCart = (product) => { /* lógica aquí */ };
            return { cart, addToCart };
        };