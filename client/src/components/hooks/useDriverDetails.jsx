import { useQuery } from "react-query"

import ApiClient from "../../backend/ApiClient"

const useDriverDetails = (driverId) =>
  useQuery(
    ["driverDetails", driverId],
    () => ApiClient.get(`/drivers/${driverId}`).then((res) => res.data),
    {
      keepPreviousData: true,
    }
  )

export default useDriverDetails
