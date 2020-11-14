import React, { useState, useEffect } from "react"
import { DELETE, PATCH } from "../Utils/fetch"
import useFetch from "../Hooks/useFetch"
import Entry from "./Entry"
import { objToArray } from "../Utils/objectsTransform"

function reducerEntries(array, action) {
  switch (action) {
    case "urgent":
      return [...array].filter((e) => e.urgent)
    case "hold":
      return [...array].filter((e) => e.hold)
    case "completed":
      return [...array].filter((e) => e.completed)
    case "descending":
      return [...array].sort((a, b) => new Date(b.date) - new Date(a.date))
    case "ascending":
      return [...array].sort((a, b) => new Date(a.date) - new Date(b.date))
    default:
      return array
  }
}

function DataDisplay({ filterOptions, orderOptions, ...props }) {
  function deleteEntry(id) {
    DELETE(id).then(props.handleSetHasSubmitted(true))
  }

  function patchEntry(id, body) {
    PATCH(id, body).then(props.handleSetHasSubmitted(true))
  }

  const [apiData] = useFetch(props.hasSubmitted, props.handleSetHasSubmitted)
  const [filteredArray, setFilterArray] = useState([])

  useEffect(() => {
    const selection = objToArray(filterOptions.status)
    const order = filterOptions.ascending ? "ascending" : "descending"
    const reorderArr = reducerEntries(apiData, order)
    const completedLastArray = [
      ...reorderArr.filter((e) => !e.completed),
      ...reorderArr.filter((e) => e.completed),
    ]

    if (selection.every((action) => !action.boolean))
      return setFilterArray(completedLastArray)

    setFilterArray(() => {
      return selection.reduce((acc, val) => {
        if (!val.boolean) return acc

        const arrayToCompare = reducerEntries(completedLastArray, val.key)
        const uniqueArray = arrayToCompare.filter((e) =>
          !acc.includes(e) ? e : null
        )
        return acc.concat(uniqueArray)
      }, [])
    })
  }, [apiData, filterOptions])

  return filteredArray.map((entry) => (
    <Entry
      key={entry.id}
      entry={entry}
      deleteEntry={deleteEntry}
      patchEntry={patchEntry}
    />
  ))
}

export default DataDisplay
