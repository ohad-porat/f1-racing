import React, { FC } from "react"

import DriverDetails from "./DriverDetails"
import DriverStats from "./DriverStats"

import Match from "../../../types/Match"

import "../../../style/driverShow.pcss"

const DriverShow: FC<{ match: Match }> = ({ match }) => {
  const { driverId } = match.params

  return (
    <>
      <DriverDetails driverId={driverId} />
      <DriverStats driverId={driverId} />
    </>
  )
}

export default DriverShow
