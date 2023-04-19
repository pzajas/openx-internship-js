import { ArrayPriceUsername } from '../typescript/types'

export const getMostExpensiveCart = (arr: ArrayPriceUsername[]) => {
  if (arr.length > 0) {
    const cartsSortedByPrice = arr.sort((a, b) => b.totalPrice - a.totalPrice)
    const mostExpensiveCart = cartsSortedByPrice[0]

    return mostExpensiveCart
  }
  return null
}
