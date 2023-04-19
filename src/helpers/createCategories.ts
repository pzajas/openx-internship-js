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

// export const createCategories = (products: Product[]): CategoryMap => {
//   const categoryMap: CategoryMap = {}

//   for (const product of products) {
//     const { category, price } = product

//     if (category in categoryMap) {
//       categoryMap[category].totalValue += price
//     } else {
//       categoryMap[category] = { totalValue: price }
//     }
//   }

//   return categoryMap
// }
