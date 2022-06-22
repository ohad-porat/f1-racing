import { useQuery } from "react-query"

import ApiClient from "../../backend/ApiClient"

const useDriversList = () =>
  useQuery("drivers", () => ApiClient.get("/drivers").then((res) => res.data), {
    keepPreviousData: true,
  })

export default useDriversList
