import React, { FC } from "react"

import { Link } from "react-router-dom"

import Driver from "../../types/Driver"

const DriverTile: FC<{ driver: Driver }> = ({ driver }) => {
  return (
    <li>
      <Link to={`/drivers/${driver.driverId}`}>
        {driver.familyName}, {driver.givenName}
      </Link>
    </li>
  )
}

export default DriverTile
