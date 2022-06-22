import React from "react"

import DriverDetails from "./DriverDetails"
import DriverStats from "./DriverStats"

import "../../../style/driverShow.pcss"

const DriverShow = ({ match }) => {
  const { driverId } = match.params

  return (
    <>
      <DriverDetails driverId={driverId} />
      <DriverStats driverId={driverId} />
    </>
  )
}

export default DriverShow
