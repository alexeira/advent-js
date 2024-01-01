// 25 points
function checkIsValidCopy (original, copy) {
  if (original.length !== copy.length) return false

  const symbols = ['#', '+', ':', '.', ' ']

  for (let i = 0; i < original.length; i++) {
    const char = original[i]
    const draft = copy[i]
    const symbol = symbols.includes(char)

    if (char === ' ') {
      if (draft !== char) return false
    }

    if (char === char.toUpperCase() && !symbol && char !== ' ') {
      if (
        draft !== char &&
        draft !== char.toLowerCase() &&
        !symbols.includes(draft)
      ) { return false }
    }

    if (char === char.toLowerCase() && !symbol && char !== ' ') {
      if (draft !== char && !symbols.includes(draft)) return false
    }

    if (symbol && char !== ' ') {
      const nextSymbols = symbols.slice(symbols.indexOf(char))
      if (!nextSymbols.includes(draft)) return false
    }
  }

  return true
}
