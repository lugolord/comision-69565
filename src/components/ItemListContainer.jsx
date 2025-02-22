import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from './ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const allProducts = 'https://dummyjson.com/products'
    const byCategory = `https://dummyjson.com/products/category/${id}`

    fetch(id ? byCategory : allProducts)
      .then(res => res.json())
      .then(res => setItems(res.products))
  }, [id])

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer
