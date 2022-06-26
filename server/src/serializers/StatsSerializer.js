export class StatsSerializer {
  static getSeasonsStats(driverStats) {
    const statsBySeason = driverStats.MRData.RaceTable.Races.reduce((aggObj, curObj) => {
      if (!aggObj[curObj["season"]]) {
        aggObj[curObj["season"]] = {
          team: curObj.Results[0].Constructor.name,
          totalRaces: 0,
          totalWins: 0,
          totalPoles: 0,
          totalPodiums: 0,
          totalWinsFromPole: 0,
          totalPoints: 0,
          avgRaceFinish: 0,
          avgGridPos: 0,
          avgPointsPerRace: 0,
          avgSpeed: 0,
        }
      }
      // team name
      const teams = aggObj[curObj["season"]].team.split("/")
      if (!teams.includes(curObj.Results[0].Constructor.name)) {
        aggObj[curObj["season"]].team =
          aggObj[curObj["season"]].team + `/${curObj.Results[0].Constructor.name}`
      }
      // total races
      aggObj[curObj["season"]].totalRaces = aggObj[curObj["season"]].totalRaces + 1
      // total wins
      if (curObj.Results[0].position === "1") {
        aggObj[curObj["season"]].totalWins = aggObj[curObj["season"]].totalWins + 1
      }
      // total poles
      if (curObj.Results[0].grid === "1") {
        aggObj[curObj["season"]].totalPoles = aggObj[curObj["season"]].totalPoles + 1
      }
      // total podiums
      if (
        curObj.Results[0].position === "1" ||
        curObj.Results[0].position === "2" ||
        curObj.Results[0].position === "3"
      ) {
        aggObj[curObj["season"]].totalPodiums = aggObj[curObj["season"]].totalPodiums + 1
      }
      // total wins from pole
      if (curObj.Results[0].position === "1" && curObj.Results[0].grid === "1") {
        aggObj[curObj["season"]].totalWinsFromPole =
          aggObj[curObj["season"]].totalWinsFromPole + 1
      }
      // total points
      aggObj[curObj["season"]].totalPoints =
        aggObj[curObj["season"]].totalPoints + parseInt(curObj.Results[0].points)
      // average race finish - initial total
      aggObj[curObj["season"]].avgRaceFinish =
        aggObj[curObj["season"]].avgRaceFinish + parseInt(curObj.Results[0].position)
      // average grid position - initial total
      aggObj[curObj["season"]].avgGridPos =
        aggObj[curObj["season"]].avgGridPos + parseInt(curObj.Results[0].grid)
      // average points per race - initial total
      aggObj[curObj["season"]].avgPointsPerRace =
        aggObj[curObj["season"]].avgPointsPerRace + parseInt(curObj.Results[0].points)
      // average speed initial total
      if (curObj.Results[0].FastestLap) {
        aggObj[curObj["season"]].avgSpeed =
          aggObj[curObj["season"]].avgSpeed +
          parseFloat(curObj.Results[0].FastestLap.AverageSpeed.speed)
      }
      return aggObj
    }, {})

    const serializedStats = []
    for (const season in statsBySeason) {
      // average race finish - final
      statsBySeason[season].avgRaceFinish =
        statsBySeason[season].avgRaceFinish / statsBySeason[season].totalRaces
      // average grid position - final
      statsBySeason[season].avgGridPos =
        statsBySeason[season].avgGridPos / statsBySeason[season].totalRaces
      // average points per race - final
      statsBySeason[season].avgPointsPerRace =
        statsBySeason[season].avgPointsPerRace / statsBySeason[season].totalRaces
      // average speed - final
      statsBySeason[season].avgSpeed =
        statsBySeason[season].avgSpeed / statsBySeason[season].totalRaces
      // season
      statsBySeason[season].season = season

      serializedStats.push(statsBySeason[season])
    }

    return serializedStats
  }
}
