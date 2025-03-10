import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

function CartWidget () {
  const { getQuantity } = useContext(cartContext)
  const navigate = useNavigate()

  const handleClick = () => navigate('/cart')
  
  return (
    <Button variant="light" onClick={handleClick}>
      🛒 <Badge bg="secondary">{getQuantity()}</Badge>
    </Button>
  )
}

export default CartWidget
