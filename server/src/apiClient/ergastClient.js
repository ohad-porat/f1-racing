import got from "got"

export class ergastClient {
  static baseUrl() {
    return "http://ergast.com/api/f1"
  }

  static async getAllDrivers() {
    const baseUrl = this.baseUrl()

    try {
      const apiResponse = await got(`${baseUrl}/drivers.json?limit=1000`)
      return apiResponse.body
    } catch (error) {
      return { error: error.message }
    }
  }

  static async getDriverDetails(driverId) {
    const baseUrl = this.baseUrl()

    try {
      const apiResponse = await got(`${baseUrl}/drivers/${driverId}.json`)
      return apiResponse.body
    } catch (error) {
      return { error: error.message }
    }
  }

  static async getDriverStats(driverId) {
    const baseUrl = this.baseUrl()

    try {
      const apiResponse = await got(
        `${baseUrl}/drivers/${driverId}/results.json?limit=500`
      )
      return apiResponse.body
    } catch (error) {
      return { error: error.message }
    }
  }
}
