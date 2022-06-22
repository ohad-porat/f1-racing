import React from "react"

import "../../style/driversList.pcss"

import useDriversList from "../hooks/useDriversList"
import DriverTile from "./DriverTile"

const DriversList = () => {
  const driversListQuery = useDriversList()
  const drivers = driversListQuery.data
    ? driversListQuery.data.MRData.DriverTable.Drivers
    : []

  let driverTiles = ""
  if (driversListQuery.status === "success") {
    driverTiles = drivers.map((driver) => (
      <DriverTile key={driver.driverId} driver={driver} />
    ))
  } else if (driversListQuery.status === "loading") {
    driverTiles = <h3>Loading...</h3>
  } else {
    driverTiles = <h3>Error</h3>
  }

  return (
    <>
      <h1 className="drivers-list__header">Drivers</h1>
      <ul className="drivers-list__list">{driverTiles}</ul>
    </>
  )
}

export default DriversList
