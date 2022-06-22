import React from "react"

import { Link } from "react-router-dom"

const DriverTile = ({ driver }) => (
  <li>
    <Link to={`/drivers/${driver.driverId}`}>
      {driver.familyName}, {driver.givenName}
    </Link>
  </li>
)

export default DriverTile
