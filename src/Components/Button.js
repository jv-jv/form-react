import React from "react"

export default function Button({ action, handleClick, ...props }) {

  return (
    <span className={`button ${props.className}`} onClick={handleClick}>
      {action}
    </span>
  )
}
