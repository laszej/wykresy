import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';






const Page4 = () => {
  const data = [
    { year: '2010', value: 938 },
    { year: '2013', value: 839 },
    { year: '2016', value: 880 },
    { year: '2019', value: 1356 },
    { year: '2022', value: 1995 },
    { year: '2023', value: 944 },
  ];
  return (
    
<div >
    <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "10rem" }}>Frekwencja w wyborach do rady osiedla i rady nadzorczej w PSM Winogrady (2010-2023) 
 </h1>
    
      
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
      
     
    </div>
  );
};

export default Page4;

