import React, { useState } from "react"
import { fullDate } from "../Utils/date"
import { POST } from "../Utils/fetch"
import Form from "./Form"
import Dashboard from "./Dashboard"
import FilterBar from "./FilterBar"
import Settings from "./Settings"
import useLocalStorage from "../Hooks/useLocalStorage"

export default function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [displayDashboard, setDisplayDashboard] = useState(true)

  const [companies, setCompanies] = useLocalStorage("companies", [
    "",
    "Apple",
    "Google",
    "Amazon",
    "Tesco",
  ])

  const [managers, setManagers] = useLocalStorage("managers", [
    "",
    "John Smith",
    "Paul Francis",
    "Tom Riddle",
  ])

  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    company: "",
    date: fullDate(),
    manager: "",
    comments: "",
    selected: false,
    urgent: false,
    hold: false,
    completed: false,
  })

  const [filterOptions, setFilterOptions] = useState({
    ascending: true,
    status: {
      urgent: false,
      hold: false,
      completed: false,
    },
  })

  function handleFilterChange(name) {
    setFilterOptions((prevState) => {
      if (name in prevState.status)
        return {
          ...prevState,
          status: { ...prevState.status, [name]: !prevState.status[name] },
        }
      return { ...prevState, [name]: !prevState[name] }
    })
  }

  function handleSetHasSubmitted(bool) {
    setHasSubmitted(bool)
  }

  function handleChange(e) {
    const { value, name, type, checked } = e.target
    type === "checkbox"
      ? setFormInfo((prevState) => ({ ...prevState, [name]: checked }))
      : setFormInfo((prevState) => ({ ...prevState, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // if (!formInfo.name /* || !formInfo.surname || !formInfo.company */) return // redundant with required attribute

    POST(formInfo)
      .then(
        setFormInfo({
          name: "",
          surname: "",
          company: "",
          date: fullDate(),
          manager: "",
          comments: "",
          notes: "",
          selected: false,
          urgent: false,
          hold: false,
          completed: false,
        })
      )
      .then(handleSetHasSubmitted(true))
  }

  return (
    <>
      <h1> Add a candidate </h1>
      <Form
        formInfo={formInfo}
        managers={managers}
        companies={companies}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <div className="display-entries">
        <h1 onClick={() => setDisplayDashboard(true)}> Dashboard </h1>
        <h1 onClick={() => setDisplayDashboard(false)}> Settings </h1>
      </div>

      {displayDashboard ? (
        <>
          <FilterBar
            filterOptions={filterOptions}
            handleFilterChange={handleFilterChange}
          />

          <Dashboard
            filterOptions={filterOptions}
            hasSubmitted={hasSubmitted}
            handleSetHasSubmitted={handleSetHasSubmitted}
          />
        </>
      ) : (
        <>
          <Settings
            title="Companies"
            options={companies}
            setOption={setCompanies}
          />
          <Settings
            title="Managers"
            options={managers}
            setOption={setManagers}
          />
        </>
      )}
    </>
  )
}
