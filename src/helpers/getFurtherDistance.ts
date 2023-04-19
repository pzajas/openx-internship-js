import { User, User1, User2 } from '../typescript/types'
import { haversine } from './haversineFunction'

export const getFurthestDistance = (users: User[]) => {
  const mappedUsersCords = users.map((user) => {
    return {
      id: user.id,
      lat: user.address?.geolocation?.lat!,
      lon: user.address?.geolocation?.long!,
    }
  })

  let furthestDistance = 0
  let user1Id = null
  let user2Id = null
  for (let i = 0; i < mappedUsersCords.length; i++) {
    for (let j = i + 1; j < mappedUsersCords.length; j++) {
      const user1: User1 = mappedUsersCords[i]
      const user2: User2 = mappedUsersCords[j]
      const distance = haversine(user1.lat, user1.lon, user2.lat, user2.lon)
      if (distance > furthestDistance) {
        furthestDistance = distance

        user1Id = user1.id
        user2Id = user2.id
      }
    }
  }

  return {
    user1Id,
    user2Id,
    furthestDistance,
  }
}
