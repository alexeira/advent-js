function organizeGifts (gifts) {
  const regex = /(\d+[a-z])/g
  const result = gifts.match(regex)
  return result.reduce((result, gift) => {
    const [n, s] = [parseInt(gift, 10), gift.at(-1)]
    const palets = `[${s}]`.repeat(n / 50)
    const boxes = `{${s}}`.repeat(n / 10 % 5)
    const existPresents = +(n % 10 > 0)
    const rest = `(${s.repeat(n % 10)})`.repeat(existPresents)
    result += palets + boxes + rest
    return result
  }, '')
}
