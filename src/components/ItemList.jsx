/* eslint-disable react/prop-types */
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function ItemList ({ items }) {
  return (
    <Container>
      <Row className='mt-3 g-5'>
        {items.map(producto => <Item producto={producto} key={producto.id} />)}
      </Row>
    </Container>
  )
}

export default ItemList
