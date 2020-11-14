import React from "react"

function ActionButtons({
  entry,
  deleteEntry,
  patchEntry,
  setIsOpen,
  ...props
}) {
  return (
    <div className="entry__btns">
      <button
        className="entry__select btn btn--select"
        onClick={() => patchEntry(entry.id, { selected: !entry.selected })}
      >
        {entry.selected ? "Unselect" : "Select"}
      </button>
      <button
        className="entry__hold btn btn--hold"
        onClick={() => {
          patchEntry(entry.id, { hold: !entry.hold })
          setIsOpen(false)
        }}
      >
        {entry.hold ? "Resume" : "On Hold"}
      </button>
      <button
        className="entry__delete btn btn--delete"
        onClick={() => deleteEntry(entry.id)}
      >
        Delete
      </button>
      <button
        className="entry__complete btn btn--complete"
        onClick={() => {
          patchEntry(entry.id, {
            selected: false,
            hold: false,
            urgent: false,
            completed: !entry.completed,
            //for testing. it should be { completed: true }
          })
          setIsOpen(false)
        }}
      >
        Complete
      </button>
    </div>
  )
}

export default ActionButtons
