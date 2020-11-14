import React from "react"
import { capitaliseSentence } from "../Utils/letterCasing"

export default function Cell({ label, data, children, ...props }) {
  return (
    <div className={`entry__${label}`}>
      <h5 className={`entry__${label}__title`}>{capitaliseSentence(label)}</h5>
      {children}
    </div>
  )
}
