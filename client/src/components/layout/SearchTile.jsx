import React from "react"

import { Link } from "react-router-dom"

const SearchTile = ({ driver, handleSelectDriver }) => (
  <p className="search-results__tile">
    <Link to={`/drivers/${driver.driverId}`} onClick={handleSelectDriver}>
      {driver.givenName} {driver.familyName}
    </Link>
  </p>
)

export default SearchTile
