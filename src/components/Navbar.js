import React from 'react'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const data = [
  {
    name: "Nov 2005",
    ug: 90,
    py:0,
    pb: 5,
    pp:5,
    
    
  },
  {
    name: "Nov 2006",
    ug:88,
    py: 0,
    pb:6,
    pp: 6,
    
  },
  {
    name: "Nov 2007",
    ug: 88,
    py: 0,
    pb:7,
    pp: 5,
    
  },
  {
    name: "Nov 2008",
    ug: 88,
    py: 3,
    pb:8,
    pp: 1,
    
  },
  {
    name: "Nov 2009",
    ug:88 ,
    py:4,
    pb:7.1,
    pp: 0.9,
    
  },
  {
    name: "Nov 2010",
    ug: 82,
    py: 10,
    pb:8,
    pp: 0,
    
  },
  {
    name: "Nov 2011",
   
    py: 11,
    pb:8,
    pp:0,
    ug: 81,
   

  },
  {
    name: "Nov 2012",
    ug: 78,
    py: 14,
    pb:8,
    pp: 0,
    
  },
  {
    name: "Nov 2013",
    ug: 60,
    py: 30,
    pb:10,
    pp: 0,
    
  },
  {
    name: "Nov 2014",
    ug: 40,
    py:50,
    pb:10,
    pp: 0,
   
  },
  {
    name: "Nov 2015",
    ug: 22,
    py: 68,
    pb:10,
    pp: 0,
  
  },
  {
    name: "Nov 2016",
    ug:15,
    py: 77,
    pb:8,
    pp: 0,
   
  },
  {
    name: "Nov 2017",
    ug: 10,
    py: 83,
    pb:7,
    pp: 0,
   
  },
  {
    name: "Nov 2018",
    ug:7,
    py: 87,
    pb:6,
    pp: 0,
    
  },
  {
    name: "Nov 2019",
    ug: 6,
    py: 89,
    pb:5,
    pp: 0,
  
  },
  {
    name: "Nov 2020",
    ug:5,
    py: 89,
    pb:6,
    pp: 0,
  
  },
  {
    name: "Nov 2021",
    ug: 3,
    py: 92,
    pb:5,
    pp: 0,
   
  },
  {
    name: "Dec 2022",
    ug1:3.9,
    ug:0.1,
    pp: 3,
    py:93,
    pb:0,
  
  },
  {
    name: "Mar 2023",
    ug:0,
    ug1: 3,
    pp:2,
    py: 94,
    pb:0,
    pb1:1,
   
  },
];

export default function Navbar() {
  return (
    <>
    <ResponsiveContainer width="100%"  aspect={3}> 
    
    <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
      <CartesianGrid stroke="#f5f5f5"  />
      <XAxis className="x" dataKey="name" scale="band"  label={{value:'Timeline',angle:360,position: 'bottom', bottom:0, top:4900 , fontSize:30}}/>
      <YAxis  label={{ value: '% of Total', angle: -90, position: 'insideLeft' }} />
      <YAxis  yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: '% Growth', angle: 90, position: 'insideRight' }}/>
      <Tooltip />
      <Legend display={true } position="bottom" align="end" />
      <Bar dataKey="pb" stackId="a" fill="blue" />
      <Bar dataKey="pb1" stackId="a" fill="lightGreen" />
      <Bar dataKey="py" stackId="a" fill="#f2e70f" />
      <Bar dataKey="pp" stackId="a" fill="red" />
      <Bar dataKey="ug" stackId="a" fill="#39b856" />
      <Bar dataKey="ug1" stackId="a" fill="darkGreen" />
    </BarChart>

    </ResponsiveContainer>


    </>
  
  );
}





 