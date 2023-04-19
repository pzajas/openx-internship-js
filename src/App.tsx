import { useState, useEffect } from 'react'
import { createCategories } from './helpers/createCategories'
import { getData } from './helpers/getData'
import { getMappedCarts } from './helpers/getMappedCarts'
import { getMostExpensiveCart } from './helpers/getMostExpensiveCart'
import { getFurthestDistance } from './helpers/getFurtherDistance'

import { User, Cart, Product } from './typescript/types'

const App = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([])
  const [carts, setCarts] = useState<Cart[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, carts, products] = await getData()
        setUsers(users)
        setCarts(carts)
        setProducts(products)
        setLoading(false)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchData()
  }, [])

  const categories = createCategories(products)
  const cartsValueUsername = getMappedCarts(carts, users, products)
  const mostExpensiveCart = getMostExpensiveCart(cartsValueUsername)

  const result = getFurthestDistance(users)

  console.log(`User1 ID: ${result.user1Id}`)
  console.log(`User2 ID: ${result.user2Id}`)

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            {users.map((user) => (
              <li key={user.id}>
                id: {user.id} user: {user.name.firstname}
              </li>
            ))}
          </div>

          <ul>
            <div>
              {Object.entries(categories).map(([category, { totalValue }]) => (
                <li key={category}>
                  {category}: {totalValue}
                </li>
              ))}
            </div>
          </ul>

          <div>
            <div>
              and the most expensive cart belongs to: price:
              {mostExpensiveCart?.totalPrice} user:{' '}
              {mostExpensiveCart?.username}
            </div>
          </div>

          <div>the furthest distance: {result.furthestDistance} kilometers</div>
          {error && <div>Error: {error}</div>}
        </div>
      )}
    </div>
  )
}

export default App
