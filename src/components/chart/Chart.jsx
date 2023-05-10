import "./chart.scss";
import DarkModeContext from "../../context/darkModeContext";
import { useState, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "January", TotalEmployee: 1200 },
  { name: "February", TotalEmployee: 2100 },
  { name: "March", TotalEmployee: 800 },
  { name: "April", TotalEmployee: 1600 },
  { name: "May", TotalEmployee: 900 },
  { name: "June", TotalEmployee: 1700 },
];

const Chart = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`chart${darkMode ? " dark-mode" : ""}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="1 3"
            stroke={
              darkMode
                ? "var(--dark-grid-stroke-color)"
                : "var(--grid-stroke-color)"
            }
          />
          <XAxis
            dataKey="name"
            stroke={
              darkMode
                ? "var(--dark-axis-stroke-color)"
                : "var(--axis-stroke-color)"
            }
          />
          <YAxis
            stroke={
              darkMode
                ? "var(--dark-axis-stroke-color)"
                : "var(--axis-stroke-color)"
            }
          />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode
                ? "var(--dark-tooltip-bg-color)"
                : "var(--tooltip-bg-color)",
              borderColor: darkMode
                ? "var(--dark-tooltip-border-color)"
                : "var(--tooltip-border-color)",
              color: darkMode
                ? "var(--dark-tooltip-text-color)"
                : "var(--tooltip-text-color)",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="TotalEmployee"
            stroke={
              darkMode
                ? "var(--dark-line-stroke-color)"
                : "var(--line-stroke-color)"
            }
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
