import React from "react"
import FilterBtn from "./FilterBtn"

export default function FilterBar({
  filterOptions,
  handleFilterChange,
  ...props
}) {
  return (
    <div className="filter-bar">
      <FilterBtn handleFilterChange={handleFilterChange} urgent />
      <FilterBtn handleFilterChange={handleFilterChange} hold />
      <FilterBtn handleFilterChange={handleFilterChange} completed />
      <FilterBtn handleFilterChange={handleFilterChange} ascending />
    </div>
  )
}
