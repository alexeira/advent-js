function adjustLights (lights) {
  const reverseLights = [...lights].reverse()
  let changes = 0; let reverseChanges = 0

  for (let i = 0; i < lights.length - 1; i++) {
    if (lights[i] === lights[i + 1]) {
      lights[i + 1] = lights[i + 1] === '🟢' ? '🔴' : '🟢'
      changes++
    }
    if (reverseLights[i] === reverseLights[i + 1]) {
      reverseLights[i + 1] = reverseLights[i + 1] === '🟢' ? '🔴' : '🟢'
      reverseChanges++
    }
  }

  return Math.min(changes, reverseChanges)
}
