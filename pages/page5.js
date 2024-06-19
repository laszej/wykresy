import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Page5 = () => {
  const data = [
    { year: '2019', value: 1356 },
    { year: '2022', value: 1995 },
    { year: '2023', value: 944 },
  ];

  const data1 = [
    { year: '2019', value: 1126 },
    { year: '2022', value: 1673 },
    { year: '2023', value: 655 },
  ];

  return (
    <>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "10rem"
          }}
        >
          Frekwencja w wyborach w PSM "Winogrady" a sposób udziału (2019-2023)
        </h1>

        <h3 style={{ textAlign: "center" }}>Łączna liczba uczestników (w tym pełnomocników)</h3>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <div>
            <BarChart
              width={300}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
            <p style={{ textAlign: "center" }}>Liczba uczestniczących osobiście:</p>
          </div>

          <div>
            <BarChart
              width={300}
              height={300}
              data={data1}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
            <p style={{ textAlign: "center" }}>Liczba uczestniczących osobiście:</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
