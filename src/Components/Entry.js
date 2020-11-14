import React, { useState } from "react"
import { capitaliseSentence } from "../Utils/letterCasing"
import ActionButtons from "./ActionButtons"
import Cell from "./Cell"
import Status from "./Status"
import Button from "./Button"

export default function Entry({ entry, deleteEntry, patchEntry }) {
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setNotes] = useState(entry.notes)
  return (
    <>
      <div
        className={entry.selected ? "entry entry--selected" : "entry"}
        onDoubleClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span
          className={
            isOpen ? "btn btn--expand" : "btn btn--expand btn--expand--open"
          }
          onClick={() => setIsOpen((prevState) => !prevState)}
        ></span>

        <span className="entry__name">
          {capitaliseSentence(`${entry.name} ${entry.surname}`)}
        </span>

        <span className="entry__company">{entry.company}</span>

        <Status
          urgent={entry.urgent}
          hold={entry.hold}
          completed={entry.completed}
        />

        {isOpen && (
          <>
            <Cell data={entry.manager} label={"manager"}>
              {entry.manager}
            </Cell>

            <span className="entry__date">
              {entry.date.split("-").reverse().join("/")}
            </span>

            {entry.comments && (
              <Cell data={entry.comments} label={"comments"}>
                <p className="entry__comments__text">{entry.comments}</p>
              </Cell>
            )}

            <Cell label="notes">
              <textarea
                className="entry__notes__text"
                name="notes"
                value={notes}
                disabled={entry.completed ? true : false}
                onChange={(e) => {
                  const { value } = e.target
                  setNotes(value)
                }}
              ></textarea>
              {!entry.completed && (
                <Button
                  className="entry__notes__save btn--regular"
                  action="Save"
                  handleClick={() => patchEntry(entry.id, { notes: notes })}
                />
              )}
            </Cell>
          </>
        )}
      </div>

      {isOpen && (
        <ActionButtons
          entry={entry}
          deleteEntry={deleteEntry}
          patchEntry={patchEntry}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  )
}
