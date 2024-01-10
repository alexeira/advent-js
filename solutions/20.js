// 25 points
function distributeGifts (weights) {
  const result = Array.from({ length: weights.length }, () => [])
  const matches = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]

  for (let row = 0; row < weights.length; row++) {
    for (let cell = 0; cell < weights[row].length; cell++) {
      let total = 0
      let qty = 0

      if (weights[row][cell] !== null) qty++

      total += weights[row][cell]

      for (const match of matches) {
        const matching = weights[row + match[0]]?.[cell + match[1]]

        if (matching === null || matching === undefined) continue

        total += matching
        qty++
      }

      result[row].push(Math.round(total / qty))
    }
  }

  return result
}
