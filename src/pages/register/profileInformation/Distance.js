import { useEffect, useState } from "react"
import axiosInstance from "../../../utils/axios"

const Distance = props => {
  const { register, errors } = props
  const [distance, setDistance] = useState([])
  useEffect(() => {
    axiosInstance
      .get("/api/lookups/all/distances")
      .then(response => {
        setDistance(response.data.distance)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div class='columnsplititem'>
      <label for='distance'>Distance Willing to Travel </label>
      <select {...register("distance")} class='formdropdownpad'>
        <option value='' selected='selected'>
          Select
        </option>
        {distance?.map(distan => (
          <option value={distan.id}>{`${distan.value} Km`}</option>
        ))}
      </select>
      <span style={{ color: "red" }}>{errors.distance?.message}</span>
    </div>
  )
}
export default Distance
