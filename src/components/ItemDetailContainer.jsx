import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProduct } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [detail, setDetail] = useState()
  const { id } = useParams()

  useEffect(() => {
    getProduct(id).then(res => setDetail(res))
  }, [id])

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer
