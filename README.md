# Guitar LA

Aplicación desarrollada con React que simula una tienda de guitarras. Permite visualizar un catálogo de productos y agregar artículos al carrito de compras.

## Características

- Catálogo de guitarras.
- Componentes reutilizables.
- Gestión de estado con `useState`.
- Renderizado dinámico de listas.
- Comunicación entre componentes mediante props.
- Carrito de compras.
- Diseño responsive.

## Tecnologías

- React
- JavaScript (ES6+)
- Vite
- CSS

## Instalación

1. Clonar el repositorio
2. Entrar al proyecto

```bash
cd guitarla
```

Instalar dependencias:

```bash
pnpm install
```

Iniciar el servidor de desarrollo:

```bash
pnpm
```

## Estructura del proyecto

```
src/
├── components/
│   ├── Guitar.jsx
│   ├── Header.jsx
├── data/
│   ├── db.js
│   hooks
│   ├── useCart.js
├── App.jsx
├── main.jsx
└── index.css
```

## Funcionalidades

- Mostrar el listado de guitarras.
- Agregar productos al carrito.
- Actualizar cantidades.
- Calcular el total de la compra.
- Vaciar el carrito.
- Persistencia del carrito (con Local Storage).

## Conceptos de React utilizados

- Componentes funcionales
- JSX
- Props
- useState
- Renderizado condicional
- Renderizado de listas con `map`
- Keys
- Manejo de eventos
