import { CategoryMap, Product } from '../typescript/types'

export const createCategories = (products: Product[]): CategoryMap => {
  const categories: CategoryMap = products.reduce(
    (acc, { category, price }) => {
      acc[category] = acc[category] || { totalValue: 0 }
      acc[category].totalValue += price
      return acc
    },
    {} as CategoryMap
  )

  return categories
}
