// 170 points
function createChristmasTree (ornaments, height) {
  let tree = ''
  let buffer = 0
  const last = ' '.repeat(height - 1) + '|\n'

  for (let i = 0; i < height; i++) {
    const incrementalOrnaments = Array.from({ length: i + 1 }, () => {
      return ornaments[buffer++ % ornaments.length]
    })

    tree += `${incrementalOrnaments.join(' ').padStart(height + i)}\n`
  }

  return tree + last
}
