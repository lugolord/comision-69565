import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/cartContext'
import { useNavigate } from 'react-router'

function CartWidget () {
  const { getQuantity } = useCart()
  const navigate = useNavigate()

  const total = getQuantity()

  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <Button variant="light" onClick={handleClick}>
      🛒 <Badge bg="secondary">{total}</Badge>
    </Button>
  )
}

export default CartWidget
