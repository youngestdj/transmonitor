import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LinearGradient,
} from "recharts";
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

const GraphMini = () => (
  <AreaChart width={90} height={70} data={data}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#0294FF" stopOpacity={0.1} />
        <stop offset="95%" stopColor="#0294FF" stopOpacity={0} />
      </linearGradient>
    </defs>
    <Tooltip />
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#0294FF"
      fillOpacity={1}
      fill="url(#colorUv)"
    />
  </AreaChart>
);

export default GraphMini;
