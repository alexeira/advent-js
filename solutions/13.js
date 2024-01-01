// 270 points
function calculateTime (deliveries) {
  let acum = 0
  let g = ''

  for (const delivery of deliveries) {
    const [h, m, s] = delivery.split(':')
    acum += +h * 3600 + +m * 60 + +s
  }

  const r = 25200 - acum
  const h = Math.abs(r / 3600 | 0).toString()
  const m = Math.abs(((r % 3600) / 60 | 0)).toString()
  const s = Math.abs(r % 60).toString()

  if (acum < 25200) {
    g = '-'
  }

  return `${g}${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`
}
