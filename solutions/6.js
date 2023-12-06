// 370 points
function maxDistance (movements) {
  let wildCard = 0; let distance = 0
  for (const move of movements) {
    if (move === '>') distance++
    else if (move === '<') distance--
    else wildCard++
  }

  return wildCard + Math.abs(distance)
}
