/* eslint-disable react/prop-types */
import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
  return (
    <div className='dsbfd'>
      <p>{detail?.title}</p>
      <p>{detail?.description}</p>
      <p>$ {detail?.price}</p>
      <ItemCount product={detail} />
    </div>
  )
}

export default ItemDetail
