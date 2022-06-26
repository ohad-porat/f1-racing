import React, { FC } from "react"

import { Link } from "react-router-dom"

import Driver from "../../types/Driver"

const SearchTile: FC<{ driver: Driver; handleSelectDriver: React.MouseEventHandler }> = ({
  driver,
  handleSelectDriver,
}) => {
  return (
    <p className="search-results__tile">
      <Link to={`/drivers/${driver.driverId}`} onClick={handleSelectDriver}>
        {driver.givenName} {driver.familyName}
      </Link>
    </p>
  )
}

export default SearchTile
