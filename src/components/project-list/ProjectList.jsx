import React from "react";

const ProjectList = () => {
  const data = [
    {
      id: 1,
      name: "Agile",
      age: 25,
      jobs: "11.02.2022",
      avaragescore: "*****",
    },
    {
      id: 2,
      name: "Teamwolf",
      age: 30,
      jobs: "11.12.2023",
      avaragescore: "*****",
    },
    {
      id: 3,
      name: "Application",
      age: 35,
      jobs: "12.11.2023",
      avaragescore: "*****",
    },
    {
      id: 4,
      name: "NeroNurients",
      age: 28,
      jobs: "22.11.2021",
      avaragescore: "*****",
    },
    {
      id: 5,
      name: "Tools",
      age: 28,
      jobs: "20.10.2020",
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

export default ProjectList;
