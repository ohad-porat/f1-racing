import { useQuery } from "react-query"

import ApiClient from "../../backend/ApiClient"

const useDriverStats = (driverId) =>
  useQuery(
    ["driverStats", driverId],
    () => ApiClient.get(`/drivers/${driverId}/stats`).then((res) => res.data),
    {
      keepPreviousData: true,
    }
  )

export default useDriverStats
