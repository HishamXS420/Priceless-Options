import {
  LineChart as LC,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// কোনো কারণে নাম duplicate হয়ে গেলে as ব্যবহার করে import এর নাম বদলাতে হবে

const LineChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const subjectMarksData = [
    {
      id: 1,
      name: "Alice",
      math_marks: 85,
      physics_marks: 72,
      chemistry_marks: 91,
    },
    {
      id: 2,
      name: "Bob",
      math_marks: 78,
      physics_marks: 89,
      chemistry_marks: 74,
    },
    {
      id: 3,
      name: "Charlie",
      math_marks: 92,
      physics_marks: 76,
      chemistry_marks: 88,
    },
    {
      id: 4,
      name: "David",
      math_marks: 74,
      physics_marks: 81,
      chemistry_marks: 69,
    },
    {
      id: 5,
      name: "Emily",
      math_marks: 88,
      physics_marks: 95,
      chemistry_marks: 83,
    },
    {
      id: 6,
      name: "Frank",
      math_marks: 81,
      physics_marks: 70,
      chemistry_marks: 92,
    },
    {
      id: 7,
      name: "Grace",
      math_marks: 95,
      physics_marks: 84,
      chemistry_marks: 77,
    },
    {
      id: 8,
      name: "Henry",
      math_marks: 69,
      physics_marks: 92,
      chemistry_marks: 80,
    },
    {
      id: 9,
      name: "Ivy",
      math_marks: 90,
      physics_marks: 78,
      chemistry_marks: 85,
    },
    {
      id: 10,
      name: "Jack",
      math_marks: 76,
      physics_marks: 87,
      chemistry_marks: 73,
    },
  ];

  return (
    <div style={{ height: "600px" }}>
      <LC
        className="ml-20 mb-20"
        height={500}
        width={1600}
        data={subjectMarksData}
      >
        <XAxis dataKey="name"> </XAxis>
        <YAxis></YAxis>
        <Line dataKey="math_marks" stroke="red"></Line>
        <Line dataKey="physics_marks" stroke="blue"></Line>
        <Line dataKey="chemistry_marks" stroke="green"></Line>
      </LC>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
