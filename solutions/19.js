// 30 points
function revealSabotage (store) {
  const matches = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  for (let row = 0; row < store.length; row++) {
    for (let cell = 0; cell < store[row].length; cell++) {
      let sabotaged = 0

      if (store[row][cell] === '*') continue

      for (const match of matches) {
        if (store[row + match[0]]?.[cell + match[1]] === undefined) {
          continue
        }
        if (store[row + match[0]]?.[cell + match[1]] === '*') {
          sabotaged++
        }
      }

      if (sabotaged === 0) continue
      store[row][cell] = String(sabotaged)
    }
  }

  return store
}
