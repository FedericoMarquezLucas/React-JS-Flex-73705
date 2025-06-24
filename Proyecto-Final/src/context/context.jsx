import { createContext, useContext, useState } from "react";

// 1.
const AppContext = createContext();

// 5.
export const useAppContext = () => useContext(AppContext);

// 2.
export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto) => {
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
        <AppContext.Provider value={{ carrito, agregarAlCarrito, removerDelCarrito, limpiarCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
};