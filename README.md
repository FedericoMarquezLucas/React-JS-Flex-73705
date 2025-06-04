# Pre-Entrega #2 | React JS Flex 73705 | CODERHOUSE

### - Federico Márquez Lucas -

## Descripción
Para este segunda entrega, se agrega una mayor funcionalidad a los componentes ya existentes, y se introducen algunos nuevos. El componente `<ItemListContainer />` ahora permite dirigir al usuario a un `<ItemDetail />` aprovechando el uso del Hook `useParams()`.

A su vez, también usamos el componente `<NavLink />` de `react-router-dom` para crear una navegación dinámica, generando una nueva `<Route />` por cada valor de **/BrandMarca** que tenemos en nuestro `mockService.js`.

Detalle de las condiciones y requerimientos estipulados en la consigna subida a la plataforma - [React JS Flex Pre-Entrega #2](https://docs.google.com/presentation/d/1m6l2FEwyyLYWBIMkoXAFfFjyYhJhm9n7ohix_S9ZPnU/edit?slide=id.g21e3a77934b_0_17#slide=id.g21e3a77934b_0_17).

De manera de poder mostrar las herramientas vistas en las primeras cinco clases, el eCommerce interactúa con el usuario de las siguientes formas:
- **NavBar** Component.
- **CartWidget** Component.
- **ItemListContainer** Component.
- **ItemCell** Component.
- **ItemDetail** Component.
- **RatingStars** Component.
- **Home** Component.
- **Footer** Component.
- **NotFound** Component.

De manera complementaria y para facilitar el desarrollo e implementación se instalaron dos dependencias al proyecto para manejar los componentes de la UI:
- [tailwindcss](https://v3.tailwindcss.com/)
- [Alpine.js](https://alpinejs.dev/)
