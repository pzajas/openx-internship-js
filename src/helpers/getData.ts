import { User, Cart, Product } from '../typescript/types'

import axios from 'axios'
import { HTTP_ADDRESS } from '../variables/urls'

type GetDataResponse = [User[], Cart[], Product[]]

export const getData = async (): Promise<GetDataResponse> => {
  try {
    const [{ data: users }, { data: carts }, { data: products }] =
      await Promise.all([
        axios.get<User[]>(HTTP_ADDRESS.USERS),
        axios.get<Cart[]>(HTTP_ADDRESS.CARTS),
        axios.get<Product[]>(HTTP_ADDRESS.PRODUCTS),
      ])
    return [users, carts, products]
  } catch (error) {
    console.log(error)
    throw error
  }
}
