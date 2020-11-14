import React from "react"

export function styleStatus(props) {
  if (props.completed)
    return { text: "completed", display: true, color: "green" }
  if (props.hold) return { text: "hold", display: true, color: "Orange" }
  if (props.urgent) return { text: "urgent", display: true, color: "Red" }
  // are we using the color property ?
  if (props.ascending) return { text: "ascending", display: true }

  return { display: false }
}

export default function Status(props) {
  const status = styleStatus(props)

  return (
    status.display && (
      <span className={`entry__status entry__status--${status.text}`}>
        {status.text}
      </span>
    )
  )
}
