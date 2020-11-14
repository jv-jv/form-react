import { useEffect, useState } from "react"
import { GET } from "../Utils/fetch"
import { flattenObj } from "../Utils/objectsTransform"

function useFetch(hasSubmitted, handleSetHasSubmitted) {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    GET()
      .then((res) => res.json())
      .then((data) => {
        const result = !data ? [] : flattenObj(data)

        setEntries(result)
      })
      .then(handleSetHasSubmitted(false))
      .catch((error) => console.error(error))
  }, [hasSubmitted, handleSetHasSubmitted])

  return [entries]
}

export default useFetch
