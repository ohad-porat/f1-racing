import React, { FC, ReactElement } from "react"

import "../../style/driversList.pcss"

import useDriversList from "../hooks/useDriversList"
import DriverTile from "./DriverTile"

const DriversList: FC = () => {
  const driversListQuery = useDriversList()
  const drivers = driversListQuery.data
    ? driversListQuery.data.MRData.DriverTable.Drivers
    : []

  let driverTiles: string | ReactElement[]
  if (driversListQuery.status === "success") {
    driverTiles = drivers.map((driver) => (
      <DriverTile key={driver.driverId} driver={driver} />
    ))
  } else if (driversListQuery.status === "loading") {
    driverTiles = "Loading..."
  } else {
    driverTiles = "Error"
  }

  return (
    <>
      <h1 className="drivers-list__header">Drivers</h1>
      <ul className="drivers-list__list">{driverTiles}</ul>
    </>
  )
}

export default DriversList
