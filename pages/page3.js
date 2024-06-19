import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';






const Page3 = () => {
  const data = [
    { year: '2010', value: 204 },
    { year: '2013', value: 180 },
    { year: '2016', value: 301 },
    { year: '2019', value: 471 },
    { year: '2022', value: 870 },
    { year: '2023', value: 344 },
  ];
  return (
    
<div >
    <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "10rem" }}>Frekwencja w wyborach do rady osiedla i rady nadzorczej na os. Wichrowe Wzgórze (2010-2023) </h1>
    
      
      <BarChart
        width={600}
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
      
      <small style={{ color: "black", marginLeft: "2rem" }}>
      - 2022: głosowanie na piśmie na podstawie art. 36 par. 9-13 ustawy Prawo spółdzielcze
      </small>
      <small style={{ color: "black", marginLeft: "2rem" }}>
      - 2022: wybory tylko do rady osiedla
      </small>
      <small style={{ color: "black", marginLeft: "2rem" }}>
      - 2023: wybory tylko do rady nadzorczej
      </small>
    </div>
  );
};

export default Page3;


