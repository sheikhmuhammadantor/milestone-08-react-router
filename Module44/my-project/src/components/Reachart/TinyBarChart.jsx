import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts"

function TinyBarChart() {

    const studentsData = [
        {
          "id": 1,
          "name": "Alice Johnson",
          "math": 85,
          "physics": 78,
          "chemistry": 92
        },
        {
          "id": 2,
          "name": "Bob Smith",
          "math": 67,
          "physics": 74,
          "chemistry": 81
        },
        {
          "id": 3,
          "name": "Charlie Brown",
          "math": 91,
          "physics": 88,
          "chemistry": 95
        },
        {
          "id": 4,
          "name": "Diana Prince",
          "math": 76,
          "physics": 82,
          "chemistry": 79
        },
        {
          "id": 5,
          "name": "Evan Lee",
          "math": 59,
          "physics": 64,
          "chemistry": 70
        }
      ]

  return (
    <div>
      <BarChart width={800} height={400} data={studentsData} className="mx-auto my-12">
        <Bar dataKey="math" fill="#8884d8" ></Bar>
        <Bar dataKey="physics" fill="#82ca9d" />
        <Bar dataKey="chemistry" fill="#487eb0" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  )
}

export default TinyBarChart
