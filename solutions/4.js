// 280 points
function decode (message) {
  let right = message.indexOf(')')

  do {
    const left = message.slice(0, right).lastIndexOf('(')
    const reversedSubstring = message
      .slice(left + 1, right)
      .split('')
      .reverse()
      .join('')

    message = `${message.slice(0, left)}${reversedSubstring}${message.slice(
      right + 1,
      message.length
    )}`

    right = message.indexOf(')')
  } while (right !== -1)

  return message
}
