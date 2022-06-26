import React, { FC } from "react"

import useDriverStats from "../../hooks/useDriverStats"
import StatsTile from "./StatsTile"

const DriverStats: FC<{ driverId: string }> = ({ driverId }) => {
  const driverStatsQuery = useDriverStats(driverId)
  const driverStats = driverStatsQuery.data || []

  const statsTiles = driverStats.map((stats) => (
    <tr>
      <StatsTile key={`${driverId}${stats.season}`} stats={stats} />
    </tr>
  ))
  return (
    <table className="driver-stats__table">
      <thead>
        <tr>
          <th colSpan={2}>Info</th>
          <th colSpan={6}>Totals</th>
          <th colSpan={4}>Averages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Season</td>
          <td>Constructor</td>
          <td>Races</td>
          <td>Wins</td>
          <td>Poles</td>
          <td>Podiums</td>
          <td className="driver-stats__column-header">
            <span className="driver-stats__column-header-info-box">Wins From Pole</span>
            WFP
          </td>
          <td>Points</td>
          <td className="driver-stats__column-header">
            <span className="driver-stats__column-header-info-box">
              Average Race Finish
            </span>
            ARF
          </td>
          <td className="driver-stats__column-header">
            <span className="driver-stats__column-header-info-box">
              Average Grid Position
            </span>
            AGP
          </td>
          <td className="driver-stats__column-header">
            <span className="driver-stats__column-header-info-box">
              Average Points Per Race
            </span>
            PPR
          </td>
          <td className="driver-stats__column-header">
            <span className="driver-stats__column-header-info-box">Average Speed</span>
            ASP
          </td>
        </tr>
        {statsTiles}
      </tbody>
    </table>
  )
}

export default DriverStats
