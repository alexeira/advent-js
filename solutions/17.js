// 130 points
function optimizeIntervals (intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
  const result = []
  let [a, b] = sortedIntervals[0]

  for (let i = 1; i < sortedIntervals.length; i++) {
    const [c, d] = sortedIntervals[i]

    if (a <= d && c <= b) {
      a = Math.min(a, c)
      b = Math.max(b, d)
    } else {
      result.push([a, b])
      a = c
      b = d
    }
  }

  result.push([a, b])

  return result
}
