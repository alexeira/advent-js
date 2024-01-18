// 120 points
function compile (code) {
  let counter = 0
  let returned = false

  for (let i = 0; i < code.length; i++) {
    const char = code[i]

    if (char === '+') counter++
    if (char === '*') counter *= 2
    if (char === '-') counter--
    if (char === '%') {
      returned = true
      continue
    }
    if (char === '<' && returned === true) {
      i = code.lastIndexOf('%')
      returned = false
    }

    if (char === '¿' && counter > 0) continue
    if (char === '¿' && counter <= 0) i = code.indexOf('?', i + 1)
  }

  return counter
}
