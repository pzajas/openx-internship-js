// DATA

export type User = {
  id: number
  name: Name
  address?: {
    geolocation: {
      lat: number
      long: number
    }
  }
}

export type Product = {
  id: number
  productId: number
  name: string
  price: number
  category: string
}

export type Cart = {
  products: { productId: number; quantity: number }[]
  userId: number
}

// NAMES

export type Name = {
  firstname: string
  lastname: string
}

export type ArrayPriceUsername = {
  totalPrice: number
  username: string
}

// CATEGORIES

export type CategoryMap = {
  [category: string]: {
    totalValue: number
  }
}

// DISTANCE

export type Geolocation = {
  geolocation: {
    lat: string | undefined
    long: string | undefined
  }
}

export type User1 = {
  id: number
  lat: number
  lon: number
}

export type User2 = {
  id: number
  lat: number
  lon: number
}
