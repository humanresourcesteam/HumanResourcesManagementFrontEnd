import "./salary.scss";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Salary = ({ className, isSidebarVisible }) => {
  const data = [
    {
      name: "Feb",
      Earnings: 1700,
      Expense: 1598,
      amt: 2400,
    },
    {
      name: "Mar",
      Earnings: 2200,
      Expense: 1698,
      amt: 2210,
    },
    {
      name: "Apr",
      Earnings: 2000,
      Expense: 1298,
      amt: 2290,
    },
    {
      name: "May",
      Earnings: 1100,
      Expense: 1378,
      amt: 2000,
    },
    {
      name: "Jun",
      Earnings: 1300,
      Expense: 1198,
      amt: 2181,
    },
    {
      name: "Jul",
      Earnings: 1200,
      Expense: 998,
      amt: 2500,
    },
    {
      name: "Aug",
      Earnings: 500,
      Expense: 898,
      amt: 2100,
    },
  ];
  return (
    <div className={`salary ${className}`}>
      <p className="salary-p">Income and Expenditure Statement</p>
      <BarChart width={900} height={330} data={data}>
        <CartesianGrid strokeDasharray="0.2 0.2" />
        <XAxis
          dataKey="name"
          tick={{ fontWeight: "bold", fontSize: "14px", color: "#1d3354" }}
        />
        <YAxis
          tick={{ fontWeight: "bold", fontSize: "14px", color: "#1d3354" }}
        />
        <Tooltip
          cursor={{ fill: "#fafafe" }}
          contentStyle={{ backgroundColor: "gray", color: "white" }}
        />

        <Bar dataKey="Earnings" fill="#d1eeea" barSize={35} />
        <Bar dataKey="Expense" fill="#fcd4c8" barSize={35} />
      </BarChart>
    </div>
  );
};

export default Salary;
