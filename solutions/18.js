// 30 points
function drawClock (time) {
  const [h1, h2, colon, m1, m2] = time.split('')
  const lego = {
    full: ['*', '*', '*'],
    last: [' ', ' ', '*'],
    first: ['*', ' ', ' '],
    double: ['*', ' ', '*'],
    middle: [' ', '*', ' '],
    empty: [' ', ' ', ' ']
  }
  const space = ' '

  function drawNumber (digit) {
    const mappings = {
      0: ['full', 'double', 'double', 'double', 'double', 'double', 'full'],
      1: ['last', 'last', 'last', 'last', 'last', 'last', 'last'],
      2: ['full', 'last', 'last', 'full', 'first', 'first', 'full'],
      3: ['full', 'last', 'last', 'full', 'last', 'last', 'full'],
      4: ['double', 'double', 'double', 'full', 'last', 'last', 'last'],
      5: ['full', 'first', 'first', 'full', 'last', 'last', 'full'],
      6: ['full', 'first', 'first', 'full', 'double', 'double', 'full'],
      7: ['full', 'last', 'last', 'last', 'last', 'last', 'last'],
      8: ['full', 'double', 'double', 'full', 'double', 'double', 'full'],
      9: ['full', 'double', 'double', 'full', 'last', 'last', 'full'],
      ':': ['empty', 'empty', 'middle', 'empty', 'middle', 'empty', 'empty']
    }

    return digit in mappings ? mappings[digit].map((part) => lego[part]) : []
  }

  const [fhd, shd, c, fmd, smd] = [
    drawNumber(h1),
    drawNumber(h2),
    drawNumber(colon),
    drawNumber(m1),
    drawNumber(m2)
  ]

  const timer = []

  for (let row = 0; row < 7; row++) {
    timer[row] = [
      fhd[row],
      space,
      shd[row],
      c[row],
      fmd[row],
      space,
      smd[row]
    ].flat()
  }

  return timer
}
