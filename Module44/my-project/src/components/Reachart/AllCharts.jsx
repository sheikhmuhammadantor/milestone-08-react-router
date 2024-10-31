import SimpleLineChart from "./SimpleLineChart"
import TinyBarChart from "./TinyBarChart"
// import SimpleRadarChart from "./SimpleRadarChart"

function AllCharts() {
  return (
    <section>
        <SimpleLineChart></SimpleLineChart>
        <TinyBarChart></TinyBarChart>
        {/* <SimpleRadarChart></SimpleRadarChart> */}
    </section>
  )
}

export default AllCharts
