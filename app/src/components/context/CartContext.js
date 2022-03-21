import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]) 
       
    function addItem(product, count) {
        let cartProduct = { product, count };
        let cartAux = [];
        if (isInCart(product)) {
            cartProduct = cart.find(item => item.product);
            cartProduct.count = cartProduct.count + count;
            cartAux = [...cart];
        } else {
            cartAux = [cartProduct, ...cart];
        }
        setCart(cartAux);
        console.log(cart)
    }

    const removeItem = (product) => {
        if (isInCart(product)){
            const cartAux = cart.filter(item=> item.product !== product)
            setCart(cartAux)
        }
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (product) => {
        return cart && cart.some(item=>item.product === product)
        }

    return(
       <CartContext.Provider value={{addItem, removeItem, clear, cart}}>
           {children}
       </CartContext.Provider> 
    )
}