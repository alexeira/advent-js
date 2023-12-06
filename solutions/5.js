// 160 points
function cyberReindeer (road, time) {
  const result = []

  for (let pos = 0; result.length < time;) {
    const currentTime = result.length
    const leftRoad = road.slice(0, pos).replace('S', '.')
    const rightRoad = road.slice(pos + 1, road.length)

    result.push(leftRoad + 'S' + rightRoad)
    pos++

    if (rightRoad.indexOf('|') === 0) {
      pos--
    }

    if (currentTime === 4) {
      road = road.replaceAll('|', '*')
      pos++
    }
  }

  return result
}
