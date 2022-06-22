/* eslint-disable no-console */
import express from "express"

import { ergastClient } from "../../../apiClient/ergastClient.js"
import { StatsSerializer } from "../../../serializers/StatsSerializer.js"
import { nextWrapper } from "../../lib/nextWrapper.js"

const driversRouter = new express.Router()

driversRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    ergastClient
      .getAllDrivers()
      .then((data) => {
        if (data.error) {
          console.log(`Error from ergast API: ${data.error}`)
        } else {
          const parsedResponse = JSON.parse(data)
          return res.status(200).json(parsedResponse)
        }
      })
      .catch((error) => {
        console.log("something went wrong")
        console.log(error)
      })
  })
)

driversRouter.get(
  "/:driverId",
  nextWrapper(async (req, res) => {
    const { driverId } = req.params
    ergastClient
      .getDriverDetails(driverId)
      .then((data) => {
        if (data.error) {
          console.log(`Error from ergast API: ${data.error}`)
        } else {
          const parsedResponse = JSON.parse(data)
          return res.status(200).json(parsedResponse)
        }
      })
      .catch((error) => {
        console.log("something went wrong")
        console.log(error)
      })
  })
)

driversRouter.get(
  "/:driverId/stats",
  nextWrapper(async (req, res) => {
    const { driverId } = req.params
    ergastClient
      .getDriverStats(driverId)
      .then((data) => {
        if (data.error) {
          console.log(`Error from ergast API: ${data.error}`)
        } else {
          const parsedResponse = JSON.parse(data)
          const serializedStats = StatsSerializer.getSeasonsStats(parsedResponse)
          return res.status(200).json(serializedStats)
        }
      })
      .catch((error) => {
        console.log("something went wrong")
        console.log(error)
      })
  })
)

export default driversRouter
