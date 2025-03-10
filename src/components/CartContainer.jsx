import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'
import CartList from './CartList'

function CartContainer () {
  const { cart } = useContext(cartContext)
  const navigate = useNavigate()

  const handleClick = () => navigate('/checkout')

  if (cart.length === 0) {
    return (
      <h2 style={{ color: cart.length < 10 ? 'red' : 'blue'}}>No tienes productos en el carrito 😿</h2>
    )
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <CartList cart={cart} />
      <Button variant='dark' className='w-50 mt-3' onClick={handleClick}>ir al checkout</Button>
    </div>
  )
}

export default CartContainer
