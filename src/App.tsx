import { useState, useEffect } from 'react'
import { createCategories } from './helpers/createCategories'
import { HTTP_ADDRESS } from './variables/urls'

import axios from 'axios'

const App = (): JSX.Element => {
  const [users, setUsers] = useState([])
  const [carts, setCarts] = useState([])
  const [products, setProducts] = useState([])

  const [, setLoading] = useState(true)
  const [, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: users }, { data: carts }, { data: products }] =
          await Promise.all([
            axios.get(HTTP_ADDRESS.USERS),
            axios.get(HTTP_ADDRESS.CARTS),
            axios.get(HTTP_ADDRESS.PRODUCTS),
          ])

        setUsers(users)
        setCarts(carts)
        setProducts(products)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const categories = createCategories(products)

  console.log(categories)

  return <div></div>
}

export default App
