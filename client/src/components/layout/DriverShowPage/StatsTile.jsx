import React from "react"

const StatsTile = ({ stats }) => {
  const formattedAvgSpeed = stats.avgSpeed === "N/A" ? "N/A" : stats.avgSpeed.toFixed(2)
  return (
    <>
      <td>{stats.season}</td>
      <td>{stats.team}</td>
      <td>{stats.totalRaces}</td>
      <td>{stats.totalWins}</td>
      <td>{stats.totalPoles}</td>
      <td>{stats.totalPodiums}</td>
      <td>{stats.totalWinsFromPole}</td>
      <td>{stats.totalPoints}</td>
      <td>{stats.avgRaceFinish.toFixed(2)}</td>
      <td>{stats.avgGridPos.toFixed(2)}</td>
      <td>{stats.avgPointsPerRace.toFixed(2)}</td>
      <td>{formattedAvgSpeed}</td>
    </>
  )
}

export default StatsTile
