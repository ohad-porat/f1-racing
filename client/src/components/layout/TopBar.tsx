import React, { useState, FC, ReactElement } from "react"

import { Link } from "react-router-dom"

import useDriversList from "../hooks/useDriversList"
import SearchTile from "./SearchTile"

import "../../style/topBar.pcss"

const TopBar: FC = () => {
  const [searchValue, setSearchValue] = useState("")

  const driversListQuery = useDriversList()
  const drivers = driversListQuery.data
    ? driversListQuery.data.MRData.DriverTable.Drivers
    : []

  const handleInputChange = (event) => {
    setSearchValue(event.currentTarget.value)
  }

  const serachedDrivers = drivers
    .filter((driver) =>
      `${driver.givenName.toLowerCase()} ${driver.familyName.toLowerCase()}`.includes(
        searchValue.toLowerCase()
      )
    )
    .slice(-10)

  const handleSelectDriver = () => {
    setSearchValue("")
  }

  let searchResultsTiles: string | null | ReactElement[]
  searchResultsTiles = serachedDrivers.map((driver) => {
    if (searchValue === "") {
      return null
    }

    return (
      <SearchTile
        key={driver.driverId}
        driver={driver}
        handleSelectDriver={handleSelectDriver}
      />
    )
  })

  if (searchValue.length > 0 && serachedDrivers.length === 0) {
    searchResultsTiles = "No Results Found"
  }

  const searchResultsClassName = searchValue !== "" ? "search-results" : ""

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/drivers">All Drivers</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <input
            className="search-bar"
            type="text"
            id="search"
            name="search"
            value={searchValue}
            onChange={handleInputChange}
          />
        </ul>
        <div className={`${searchResultsClassName}`}>{searchResultsTiles}</div>
      </div>
    </div>
  )
}

export default TopBar
