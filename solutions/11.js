function getIndexsForPalindrome (word) {
  let draft = [...word]

  if (word === [...word].reverse().join('')) return []

  for (let buffer = 0; buffer < word.length - 1; buffer++) {
    for (let i = buffer + 1; i < word.length; i++) {
      draft[buffer] = word[i]
      draft[i] = word[buffer]
      if (draft.join('') === [...draft].reverse().join('')) return [buffer, i]
      draft = [...word]
    }
  }

  return null
}
