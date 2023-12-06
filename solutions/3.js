// 350 points
function findNaughtyStep (original, modified) {
  if (original.length === modified.length) return ''

  const longer = modified.length > original.length ? modified : original

  for (let i = 0; i < longer.length; i++) {
    if (original[i] !== modified[i]) return longer[i]
  }
}
