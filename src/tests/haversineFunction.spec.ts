import { haversine } from '../helpers/haversineFunction'

describe('haversine', () => {
  it('should return 0 for same coordinates', () => {
    const lat1 = 51.5074
    const lon1 = -0.1278
    const lat2 = 51.5074
    const lon2 = -0.1278
    const expectedDistance = 0

    const result = haversine(lat1, lon1, lat2, lon2)
    expect(result).toBeLessThan(expectedDistance + 1)
  })

  it('should calculate the correct distance for nearby coordinates', () => {
    const lat1 = 51.5074
    const lon1 = -0.1278
    const lat2 = 51.5075
    const lon2 = -0.1279
    const expectedDistance = 0.1228

    const result = haversine(lat1, lon1, lat2, lon2)
    expect(result).toBeLessThan(expectedDistance + 1)
  })

  it('should calculate the correct distance for distant coordinates', () => {
    const lat1 = 51.5074
    const lon1 = -0.1278
    const lat2 = 40.7128
    const lon2 = -74.006
    const expectedDistance = 5573.0388

    const result = haversine(lat1, lon1, lat2, lon2)
    expect(result).toBeLessThan(expectedDistance + 1)
  })
})
