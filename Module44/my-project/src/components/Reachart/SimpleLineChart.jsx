import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function SimpleLineChart() {

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
        <LineChart width={800} height={400} data={studentsData} className='mx-auto mt-8'>
            <Line type='stepBefore' dataKey="math"/>
            <Line type='bump' dataKey="physics" stroke='red'/>
            <Line type='monotone' dataKey="chemistry" stroke='green'/>
            <XAxis dataKey="name" />
            <YAxis dataKey="" />
            <Tooltip />
            {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
        </LineChart>
    </div>
  )
}

export default SimpleLineChart;
