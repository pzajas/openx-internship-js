export const haversine = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const degToRad = Math.PI / 180
  const radius = 6371

  const lat1_rad = lat1 * degToRad
  const lon1_rad = lon1 * degToRad
  const lat2_rad = lat2 * degToRad
  const lon2_rad = lon2 * degToRad

  const dlat = lat2_rad - lat1_rad
  const dlon = lon2_rad - lon1_rad
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = radius * c

  return distance
}
