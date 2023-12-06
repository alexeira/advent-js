// 270 points
function manufacture (gifts, materials) {
  return gifts.filter(g => g.split('').every(ch => materials.includes(ch)))
}
