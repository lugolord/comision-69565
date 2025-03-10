/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import CartItem from './CartItem'

function CartList ({ cart }) {
  return (
    <ListGroup className='w-50 mt-5'>
      {cart.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
    </ListGroup>
  )
}

export default CartList
