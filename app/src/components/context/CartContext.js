import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]) 
    const [totalUnit, setTotalUnit] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
       
    function addItem(product, count) {
        let cartProduct = { product, count };
        let cartAux = [];
        if (isInCart(product)) {
            cartProduct = cart.find(item => item.product === product);
            cartProduct.count = cartProduct.count + count;
            cartAux = [...cart];
        } else {
            cartAux = [cartProduct, ...cart];
        }
        setCart(cartAux);

    }

    const removeItem = (product) => {
        if (isInCart(product)){
            const cartAux = cart.filter(item=> item.product !== product)
            setCart(cartAux)
        }
    }

    const clear = () => {
        setCart([])
        setTotalUnit(0)
        setTotalPrice(0)
    }

    const isInCart = (product) => {
        return cart && cart.some(item=>item.product === product)
        }

        useEffect(() => {
            const sumUnit = cart.map(item => item.count).reduce((prev, curr) => prev + curr, 0)
            setTotalUnit(sumUnit)
            const sumPrice = cart.map(item => item.product.price * item.count).reduce((prev, curr) => prev + curr, 0)
            setTotalPrice(sumPrice)
        },[cart])

    return(
       <CartContext.Provider value={{addItem, removeItem, clear, cart, totalUnit, totalPrice}}>
           {children}
       </CartContext.Provider> 
    )
}