import "./best.scss";
import React, { useState, useEffect } from "react";

const BestEmployee = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      jobs: "Software Developer",
      avaragescore: "*****",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      jobs: "Software Developer",
      avaragescore: "*****",
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 35,
      jobs: "Software Developer",
      avaragescore: "*****",
    },
    {
      id: 4,
      name: "Alice Williams",
      age: 28,
      jobs: "Software Developer",
      avaragescore: "*****",
    },
    {
      id: 5,
      name: "Alice Williams",
      age: 28,
      jobs: "Software Developer",
      avaragescore: "*****",
    },
  ];
  return (
    <div className="best">
      <table className="best-table">
        <thead>
          <tr>
            <th>Name</th>

            <th>Jobs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td>{item.jobs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BestEmployee;
