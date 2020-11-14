import React from "react"
import Select from "./Select"

export default function Form({
  handleSubmit,
  handleChange,
  formInfo,
  ...props
}) {
  return (
    <form className="container" onSubmit={handleSubmit}>
      <input
        className="grid-item"
        onChange={handleChange}
        type="text"
        name="name"
        value={formInfo.name}
        placeholder="Name"
        required
      />

      <input
        className="grid-item"
        onChange={handleChange}
        type="text"
        name="surname"
        value={formInfo.surname}
        placeholder="Surname"
        // required
      />

      <Select
        name="company"
        options={props.companies}
        onChange={handleChange}
        value={formInfo.company}
        // required
      />

      <input
        className="grid-item"
        onChange={handleChange}
        type="date"
        name="date"
        value={formInfo.date}
        placeholder="Date"
      />

      <Select
        name="manager"
        options={props.managers}
        onChange={handleChange}
        value={formInfo.manager}
      />

      <label className="grid-item urgent" htmlFor="urgent">
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          checked={formInfo.urgent}
          onChange={handleChange}
        />
        Urgent
      </label>

      <textarea
        type="text"
        className="comments grid-item"
        name="comments"
        value={formInfo.comments}
        placeholder="Comments"
        onChange={handleChange}
      />

      <button className="btn btn--submit">Submit</button>
    </form>
  )
}
