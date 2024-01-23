// 140 points
function organizeChristmasDinner (dishes) {
  const duplicates = {}

  for (const [name, ...ingrd] of dishes) {
    for (const ing of ingrd) {
      duplicates[ing] = duplicates[ing] || []
      duplicates[ing].push(name)
    }
  }

  const result = []

  for (const ing in duplicates) {
    const plates = duplicates[ing]
    if (plates.length >= 2) {
      result.push([ing, ...plates.sort()])
    }
  }

  return result.sort((a, b) => a[0].localeCompare(b[0]))
}
