/* eslint-disable react/prop-types */
import { cartContext } from './cartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const getQuantity = () => {
    const quantities = cart.map(item => item.quantity)
    const total = quantities.reduce((acc, current) => acc + current, 0)
    
    return total
  }

  const getTotal = () => {
    const prices = cart.map(item => item.price*item.quantity)
    const total = prices.reduce((acc, current) => acc + current, 0)
    
    return total
  }

  const addToCart = item => setCart([...cart, item])

  const clearCart = () => setCart([])

  return (
    <cartContext.Provider value={{ getQuantity, addToCart, getTotal, clearCart, cart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
