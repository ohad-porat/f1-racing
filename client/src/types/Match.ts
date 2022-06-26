interface Match {
  isExact: boolean
  params: {
    driverId: string
  }
  path: string
  url: string
}

export default Match
