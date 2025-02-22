import { useCart } from '../context/cartContext'
import CartList from './CartList'

function CartContainer () {
  const { cart } = useCart()

  return (
    <div className='d-flex justify-content-center'>
      {cart.length === 0 ? <h2>No tienes productos en el carrito 😿</h2> : <CartList cart={cart} />}
    </div>
  )
}

export default CartContainer
