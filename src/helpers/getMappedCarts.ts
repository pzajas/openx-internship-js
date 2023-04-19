import { User, Cart, Product } from '../typescript/types'

export const getMappedCarts = (
  carts: Cart[],
  users: User[],
  products: Product[]
) => {
  const productMap = new Map(products.map((product) => [product.id, product]))

  const cartsTotalValue = carts?.map(({ products, userId }: Cart) => {
    const user = users?.find((user: User) => user.id === userId)
    const username = user
      ? `${user.name.firstname} ${user.name.lastname}`
      : 'Unknown User'

    const totalPrice = products.reduce((total, { productId, quantity }) => {
      const product = productMap.get(productId)
      if (product) {
        return total + product.price * quantity
      }
      return total
    }, 0)

    return {
      totalPrice,
      username,
    }
  })

  return cartsTotalValue
}
