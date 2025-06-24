import { createContext, useContext, useState } from "react";

// 1.
const AppContext = createContext();

// 5.
export const useAppContext = () => useContext(AppContext);

// 2.
export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        if (carrito.some(el => el.id === producto.id)) {
            const nuevoCarrito = carrito.map(element => {
                if(element.id === producto.id){
                    return {
                        ...element,
                        cantidad: element.cantidad + producto.cantidad,
                    };
                } else {
                    return element;
                };
            });
            setCarrito(nuevoCarrito);
            // console.log(`Producto ${el.id} agregado al carrito!`)
        } else {
            setCarrito([...carrito, producto]);
            console.log(`Producto ${producto.brand} ${producto.model} agregado al carrito!`)
        };
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    // Cantidad de productos
    // carrito.reduce((acc,value) => acc += value.cantidad, 0)
    
    // Precio final
    // carrito.reduce((acc,value) => acc += (value.cantidad * value.price), 0)

    // 3.
    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito, limpiarCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
};