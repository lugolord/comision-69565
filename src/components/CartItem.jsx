/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function CartItem ({ item }) {
  return (
    <ListGroup.Item className='d-flex justify-content-between'>
      {item.title} x {item.quantity}
      <Button variant='danger'>X</Button> 
    </ListGroup.Item>
  )
}

export default CartItem
