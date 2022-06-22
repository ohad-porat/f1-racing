import React from "react"

import useDriverDetails from "../../hooks/useDriverDetails"

const DriverDetails = ({ driverId }) => {
  const driverDetailsQuery = useDriverDetails(driverId)
  const driver = driverDetailsQuery.data
    ? driverDetailsQuery.data.MRData.DriverTable.Drivers[0]
    : {}

  let fullName = ""
  if (driverDetailsQuery.status === "success") {
    fullName = `${driver.givenName} ${driver.familyName}`
  } else if (driverDetailsQuery.status === "loading") {
    fullName = "Loading..."
  } else {
    fullName = "Error"
  }

  const dateOfBirth = driver ? driver.dateOfBirth : ""
  const nationality = driver ? driver.nationality : ""

  return (
    <div className="driver-details">
      <h1 className="driver-details__header">{fullName}</h1>
      <h3>Date of Birth: {dateOfBirth}</h3>
      <h3>Nationality: {nationality}</h3>
    </div>
  )
}

export default DriverDetails
