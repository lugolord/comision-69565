/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import CloseButton from 'react-bootstrap/CloseButton'

function CartList ({ cart }) {
  return (
    <ListGroup className='w-50 mt-5'>
      {cart.map(prod => (
        <ListGroup.Item key={prod.id} className='d-flex justify-content-between p-3'>
          {prod.title} x {prod.quantity} <CloseButton />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default CartList
