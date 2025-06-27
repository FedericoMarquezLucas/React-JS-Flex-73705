import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
			if (cart.some(el => el.id === product.id)) {
				const newCart = cart.map(element => {
					if(element.id === product.id){
						return {
							...element,
							quantity: element.quantity + product.quantity,
						}
					} else {
						return element
					}
				})
					setCart(newCart)
			} else {
				setCart([...cart, product])
			}
    }

		const decrementQuantity = (id) => {
			setCart((prevCart) =>
				prevCart.map((element) =>
					element.id === id
						? { ...element, quantity: Math.max(0, element.quantity - 1) }
						: element
				)
			)
  	}
		
		const incrementQuantity = (id) => {
			setCart((cart) =>
				cart.map((element) =>
					element.id === id
						? { ...element, quantity: element.quantity + 1 }
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

    // CART - TOTAL QUANTITY.
    // cart.reduce((acc,value) => acc += value.quantity, 0)
    
    // CART - TOTAL PRICE.
    // cart.reduce((acc,value) => acc += (value.quantity * value.price), 0)

    return (
			<AppContext.Provider value={{ cart, addToCart, decrementQuantity, incrementQuantity, removeFromCart, emptyCart }}>
				{props.children}
			</AppContext.Provider>
    );
};