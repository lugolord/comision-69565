/* eslint-disable react/prop-types */
import { cartContext } from './cartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => { // TODO: evitar duplicados
    setCart([...cart, product]) 
  }

  const getQuantity = () => {
    const quantities = cart.map(product => product.quantity)
    const result = quantities.reduce((acc, current) => acc + current, 0)
    
    return result
  }

  return (
    <cartContext.Provider value={{ addToCart, getQuantity, cart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
