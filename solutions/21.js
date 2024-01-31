function findBalancedSegment (message) {
  let current = [0]

  for (let i = 0; i < message.length; i++) {
    let balance = message[i]; let count = 1

    for (let j = i + 1; j < message.length; j++) {
      balance += message[j]

      if (++count / balance === 2 && count > current[0]) { current = [count, i, j] }
    }
  }

  return current.slice(1)
}
