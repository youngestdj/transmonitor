import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LinearGradient,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Aprl",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const GraphLarge = () => (
  <div style={{ width: 900, height: 313 }}>
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0294FF" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#0294FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          orientation="top"
          padding={{ left: 10 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide="true" />

        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default GraphLarge;
