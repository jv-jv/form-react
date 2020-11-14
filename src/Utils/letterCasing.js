export function capitaliseWord(word) {
  if (!word) return
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

export function capitaliseSentence(sentence) {
  if (!sentence) return
  return sentence
    .split(" ")
    .map((word) => capitaliseWord(word))
    .join(" ")
}
