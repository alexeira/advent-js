function autonomousDrive (store, movements) {
  const robotPath = store.findIndex(el => el.includes('!'))
  const robotPos = store[robotPath].indexOf('!')
  let [row, col] = [robotPath, robotPos]

  for (let i = 0; i < movements.length; i++) {
    const r = store[row]?.[col + 1]
    const l = store[row]?.[col - 1]
    const u = store[row - 1]?.[col]
    const d = store[row + 1]?.[col]

    if (movements[i] === 'R' && r !== '*' && r !== undefined) {
      col++
    }
    if (movements[i] === 'L' && l !== '*' && l !== undefined) {
      col--
    }
    if (movements[i] === 'U' && u !== '*' && u !== undefined) {
      row--
    }
    if (movements[i] === 'D' && d !== '*' && d !== undefined) {
      row++
    }
  }

  if (row === robotPath && col === robotPos) return store

  const a = store[robotPath]?.split('')
  a[robotPos] = '.'
  store[robotPath] = a.join('')

  const s = store[row]?.split('')
  s[col] = '!'
  store[row] = s.join('')

  return store
}
