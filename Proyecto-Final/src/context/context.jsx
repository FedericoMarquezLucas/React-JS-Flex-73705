import { createContext, useContext, useState } from "react";

// 1.
const AppContext = createContext();

// 5.
export const useAppContext = () => useContext(AppContext);

// 2.
export const ContextProvider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (producto) => {
			if (cart.some(el => el.id === producto.id)) {
				const newCart = cart.map(element => {
					if(element.id === producto.id){
						return {
							...element,
							cantidad: element.cantidad + producto.cantidad,
						}
					} else {
						return element
					}
				})
					setCart(newCart)
			} else {
				setCart([...cart, producto])
			}
    }

		const decrementQuantity = (id) => {
			setCart((prevCart) =>
				prevCart.map((element) =>
					element.id === id
						? { ...element, cantidad: Math.max(0, element.cantidad - 1) }
						: element
				)
			)
  	}
		
		const incrementQuantity = (id) => {
			setCart((cart) =>
				cart.map((element) =>
					element.id === id
						? { ...element, cantidad: element.cantidad + 1 }
						: element
				)
			)
		}

		const removeFromCart = (id) => {
			setCart(cart.filter((producto) => producto.id !== id))
		}

    const emptyCart = () => {
    	setCart([])
    }

    // Cantidad de productos
    // cart.reduce((acc,value) => acc += value.cantidad, 0)
    
    // Precio final
    // cart.reduce((acc,value) => acc += (value.cantidad * value.price), 0)

    // 3.
    return (
        <AppContext.Provider value={{ cart, addToCart, decrementQuantity, incrementQuantity, removeFromCart, emptyCart }}>
            {props.children}
        </AppContext.Provider>
    );
};