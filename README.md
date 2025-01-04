# Proyecto de Aprendizaje de React

En este proyecto, aprendí que hay diferentes maneras de escribir CSS en React, como CSS Plano, SASS, Modulos CSS, Styled Components, una librería basaba en componentes y Frameworks CSS.

## ¿Qué son los componentes en React?

Los componentes en React son la forma en que se crean aplicaciones y sitios web. Un componente puede tener la extensión .jsx o .tsx; .js también es posible pero lo recomendado son las 2 primeras opciones.

Un componente usualmente tiene 2 propósitos:

* Ser reutilizable
* Separar la funcionalidad

Siempre debe tener un return() que es lo que se muestra en la pantalla.

## ¿Qué es JSX?

JSX es una extensión del lenguaje desarrollada por Meta (Facebook) para React. Parece JS pero muestra código de HTML, y básicamente es un lenguaje de Templates/Vistas que muestra el HTML pero tiene todas las funciones de JavaScript.

Una vez compilado son archivos JS con funciones y objetos.

## Reglas en JSX

A diferencia de HTML, que no es estricto, en JSX si un elemento HTML tiene una etiqueta de apertura, deberás tener también la de cierre.

Las etiquetas de solo apertura como `<link>` `<img>` o `<input>` deberán finalizar con />

Cada componente debe tener un return

En este return debe haber máximo un elemento en el nivel máximo

## ¿Qué son los React Hooks o Hooks?

Los hooks te permiten utilizar las diferentes funciones de React en tus componentes. React tiene una serie de Hooks pero también puedes crear los tuyos.

Los Hooks están disponibles desde la versión 16.8, previo a ello se tenían que crear Classes para crear y modificar el state, con los Hooks no es necesario

Los Hooks se dividen en Básicos y Adicionales

### Crear tus propios Hooks

También es posible crear tus propios Hooks, de esta forma podrás separar tu código en funciones reutilizables y sacar todo el beneficio de lo que React ofrece

## ¿Qué es el State O Estado en React?

El Estado es una variable con información relevante en nuestra aplicación de React, algunas veces el state pertenece a un componente en específico o algunas veces deseas compartirlo a lo largo de diferentes componentes.

Piensa en el state como el resultado de alguna interacción en el sitio o aplicación web: el listado de clientes, la imagen a mostrar en una galería, si un usuario está autenticado o no.

El state es creado con el hook `useState()`

### React reacciona en base al State

Cada que tu state cambia, tu aplicación de React va a renderizar y actualizarse con esos cambios, no es necesario hacer nada más y tu interfaz siempre estará sincronizada con el state.

Para modificar el state, se utiliza la función que extraemos cuando declaramos el state en nuestro componente.

### Reglas de los Hooks en React

Los Hooks se colocan en la parte superior de tus componentes de React. No se deben colocar dentro de condicionales, tampoco después de un return.

## El Hook useEffect

Después de useState es el más utilizado. useEffect siempre es un callback, que dependiendo como lo declares va a realizar diferentes acciones.

Es el sustituto de lo que antes era `componentDidMount()` y `componentDidUpdate()`

### Usos de useEffect

Al ejecutarse automáticamente cuando el componente está listo, es un buen lugar para colocar código para consultar una API o LocalStorage.

Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que suceden en una variable, puede actualizar el componente cuando ese cambio suceda.

Dependiendo del valor que pasemos en el array de dependencias ( o no pasamos nada) ei hook de useЕſſect hará algo diferente.

## Statements En JavaScript

Una app de JS es una serie de statements, cada statement es una instrucción para hacer algo.

Algunos Statements son:

* Creación de variables
* Código condicionales con if
* Lanzar errores con throw new Error()
* Iterar con While o For

## Expressions en JavaScript

Una expresión es algo que produce un valor. Algunas Expressions son:

* Ternarios
* Utilizar un Array Method que genere un nuevo Array. 
* `.map()` que genera un nuevo a diferencia de un .`forEach()`

## ¿Qué son los Props?

Los componentes de React utilizan Props para comunicarse entre ellos. Puedes pasarle información de un componente padre al hijo por medio de estos props.

Los props se parecen a los atributos en HTML, pero puedes pasarle arrays, objetos o funciones.

Los Props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre

Si tienes un state que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal.

Cada Nivel de Componentes deberá tomar y pasar el Prop hacia otros componentes, tecnologías como Redux, Zustand, Jotai o Context evitan tener que hacerlo de esta forma.

## Sobre los Eventos En React

La forma en que React maneja los eventos es muy similar a como lo hace JavaScript de forma nativa con algunos cambios.

Los eventos son camelCase, es decir en lugar de onchange se utiliza onChange, en lugar de onclick se utiliza onClick

También a diferencia de JS y HTML, donde se coloca el nombre de la función en un string en React (JSX) se utiliza la función entre llaves { }