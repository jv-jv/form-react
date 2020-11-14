import React from "react"

export default function Select(props) {
  return (
    <select
      className="grid-item"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {props.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}


