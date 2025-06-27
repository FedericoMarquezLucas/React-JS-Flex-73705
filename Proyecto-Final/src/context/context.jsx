import { createContext, useContext, useState } from "react";

// 1.
const AppContext = createContext();

// 5.
export const useAppContext = () => useContext(AppContext);

// 2.
export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const addToCart = (producto) => {
			if (carrito.some(el => el.id === producto.id)) {
				const nuevoCarrito = carrito.map(element => {
					if(element.id === producto.id){
						return {
							...element,
							cantidad: element.cantidad + producto.cantidad,
						}
					} else {
						return element
					}
				})
					setCarrito(nuevoCarrito)
			} else {
				setCarrito([...carrito, producto])
			}
    }

		const decrementQuantity = (id) => {
			setCarrito((prevCarrito) =>
				prevCarrito.map((element) =>
					element.id === id
						? { ...element, cantidad: Math.max(0, element.cantidad - 1) }
						: element
				)
			)
  	}
		
		const incrementQuantity = (id) => {
			setCarrito((carrito) =>
				carrito.map((element) =>
					element.id === id
						? { ...element, cantidad: element.cantidad + 1 }
						: element
				)
			)
		}

		const removerDelCarrito = (id) => {
			setCarrito(carrito.filter((producto) => producto.id !== id))
			console.log(`Producto ID: ${id} removido del Carrito!`)
		}

    const limpiarCarrito = () => {
        setCarrito([])
    }

    // Cantidad de productos
    // carrito.reduce((acc,value) => acc += value.cantidad, 0)
    
    // Precio final
    // carrito.reduce((acc,value) => acc += (value.cantidad * value.price), 0)

    // 3.
    return (
        <AppContext.Provider value={{ carrito, addToCart, decrementQuantity, incrementQuantity, removerDelCarrito, limpiarCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
};