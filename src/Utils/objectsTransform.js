export function objToArray(obj) {
  return Object.entries(obj).map(([key, boolean]) => ({
    key,
    boolean,
  }))
}

export function flattenObj(obj) {
  return Object.entries(obj).map(([id, data]) => ({
    ...data,
    id,
  }))
}
