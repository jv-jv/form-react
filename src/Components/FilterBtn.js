import React, { useState } from "react"
import { styleStatus } from "./Status"
// intagrate this wiht Status component (??)

export default function FilterBtn({ handleFilterChange, ...props }) {
  const [isActive, setIsActive] = useState(false)
  const element = styleStatus(props)

  return (
    <span
      className={
        isActive
          ? `entry__status entry__status--${element.text}`
          : `entry__status entry__status--off`
      }
      onClick={() => {
        handleFilterChange(element.text)
        setIsActive((prevState) => !prevState)
      }}
    >
      {/* class name origianlly for Status */}
      {element.text === "ascending" && !isActive ? "descending" : element.text}
    </span>
  )
}
