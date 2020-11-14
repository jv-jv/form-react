import React, { useState } from "react"
import Button from "./Button"

export default function Settings({ options, setOption, title, ...props }) {
  const [newOption, setNewOption] = useState("")

  function handleOptionSubmit(e) {
    e.preventDefault()
    setOption((prevState) => [...prevState, newOption])
    setNewOption("")
  }

  return (
    <>
      <h2 className="settings__title">{title}</h2>
      {options.map((company, index) => {
        if (!company) return null
        return (
          <div key={index} className="settings">
            <Button
              className="settings__btn btn--delete"
              action="delete"
              handleClick={() =>
                setOption((prevState) => prevState.filter((e) => e !== company))
              }
            />
            <span className="settings__name">{company}</span>
          </div>
        )
      })}
      <form className="settings" onSubmit={(e) => handleOptionSubmit(e)}>
        <Button
          className="settings__btn btn--complete"
          action="add"
          handleClick={(e) => handleOptionSubmit(e)}
        />
        <input
          className="settings__name settings__input"
          name="NewOption"
          value={newOption}
          onChange={(e) => {
            const { value } = e.target
            setNewOption(value)
          }}
        />
      </form>
    </>
  )
}
