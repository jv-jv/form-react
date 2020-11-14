export function fullDate() {
  const now = new Date()

  const month = () => {
    if (now.getMonth() > 9) return now.getMonth()
    return "0" + now.getMonth()
  }

  const day = () => {
    if (now.getDate() > 9) return now.getDate()
    return "0" + now.getDate()
  }

  return `${now.getFullYear()}-${month()}-${day()}`
}
