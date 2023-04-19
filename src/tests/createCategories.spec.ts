import { createCategories } from '../helpers/createCategories'
import { CategoryMap, Product } from '../typescript/types'
import { expect } from 'chai'

const mockEmptyProducts: Product[] = []
const mockProducts: Product[] = [
  {
    id: 1,
    productId: 101,
    name: 'Product1',
    price: 100,
    category: 'Electronics',
  },
  {
    id: 2,
    productId: 102,
    name: 'Product2',
    price: 200,
    category: 'Electronics',
  },
  {
    id: 3,
    productId: 103,
    name: 'Product3',
    price: 150,
    category: 'Furniture',
  },
  { id: 4, productId: 104, name: 'Product4', price: 50, category: 'Clothing' },
  { id: 5, productId: 105, name: 'Product5', price: 100, category: 'Clothing' },
]

describe('createCategories', () => {
  test('should create category map with merged categories and correct total values when receiving valid products data', () => {
    const result: CategoryMap = createCategories(mockProducts)

    const expectedCategoryMap: CategoryMap = {
      Electronics: { totalValue: 300 },
      Furniture: { totalValue: 150 },
      Clothing: { totalValue: 150 },
    }

    expect(result).to.deep.equal(expectedCategoryMap)
  })

  test('should create an empty category map when receiving an empty array of products', () => {
    const result: CategoryMap = createCategories(mockEmptyProducts)

    const expectedCategoryMap: CategoryMap = {}

    expect(result).to.deep.equal(expectedCategoryMap)
  })

  test('should fail when receiving result that does not match the expected category map', () => {
    try {
      const result: CategoryMap = createCategories(mockProducts)

      const expectedCategoryMap: CategoryMap = {
        Electronics: { totalValue: 400 },
        Furniture: { totalValue: 150 },
        Clothing: { totalValue: 150 },
      }

      expect(result).to.deep.equal(expectedCategoryMap)
    } catch (error) {
      expect((error as Error).message).to.match(/expected .* to deeply equal/)
    }
  })
})
