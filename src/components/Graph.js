
import {
  ResponsiveContainer,
  ComposedChart,
 
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart
} from "recharts";

const data = [
 
  {
    name: "Nov 2005",
    ug: 2,
    py:0,
    pb: 0,
    pp:0,
    li1:2,
    amt:-10,
    
  },
  {
    name: "Nov 2006",
    ug: 2,
    py: 0.1,
    pb:0.1,
    pp: 0,
    li1:2.2,
    cnt: 15.7,
    amt:-8,
  },
  {
    name: "Nov 2007",
    ug: 2,
    py: 0.1,
    pb:0.1,
    pp: 0,
    li1:2.2,
    cnt: 12,
    amt:-6,
  },
  {
    name: "Nov 2008",
    ug: 2.6,
    py: 0.3,
    pb:0.1,
    pp: 0,
    li1:3,
    cnt: 8.3,
    amt:-4,
  },
  {
    name: "Nov 2009",
    ug:2.1 ,
    py: 0.2,
    pb:0.3,
    pp: 0,
    li1:2.6,
    cnt: -1,
    amt:-6,
  },
  {
    name: "Nov 2010",
    ug: 3,
    py: 0.5,
    pb:0.4,
    pp: 0,
    li1:3.9,
    cnt: 14,
    amt:-1,
  },
  {
    name: "Nov 2011",
   
    py: 0.9,
    pb:0.4,
    pp: 0,
    ug: 2.9,
    li1:4,
    cnt: 8,
    amt:-2,

  },
  {
    name: "Nov 2012",
    ug: 2.8,
    py: 1,
    pb:0.4,
    pp: 0,
    li1:4.2,
    cnt: 6,
    amt:0,
  },
  {
    name: "Nov 2013",
    ug: 2.2,
    py: 1.2,
    pb:0.5,
    pp: 0,
    li1:3.9,
    cnt: 4,
    amt:-1,
  },
  {
    name: "Nov 2014",
    ug: 1.5,
    py: 2.3,
    pb:0.4,
    pp: 0,
    li1:4.1,
    cnt: 5.5,
    amt:0,
  },
  {
    name: "Nov 2015",
    ug: 1,
    py: 3,
    pb:0.4,
    pp: 0,
   li1:4.4,
    cnt: 10,
    amt:2,
  },
  {
    name: "Nov 2016",
    ug: 0.8,
    py: 4.6,
    pb:0.5,
    pp: 0,
    li1:5.9,
    cnt: 12,
    amt:5,
  },
  {
    name: "Nov 2017",
    ug: 0.6,
    py: 5.8,
    pb:0.5,
    pp: 0,
    li1:6.9,
    cnt: 13,
    amt:7,
  },
  {
    name: "Nov 2018",
    ug: 0.5,
    py: 8,
    pb:0.5,
    pp: 0,
    li1:9,
    cnt: 12.1,
    amt:13,
  },
  {
    name: "Nov 2019",
    ug: 0.4,
    py: 10.1,
    pb:0.5,
    pp: 0,
    li1:11,
    cnt: 12.2,
    amt:14,
  },
  {
    name: "Nov 2020",
    ug: 0.3,
    py: 10.2,
    pb:0.5,
    pp: 0,
    li1:11.3,
    cnt: 8,
    amt:23,
  },
  {
    name: "Nov 2021",
    ug: 0.2,
    py: 15,
    pb:0.6,
    pp: 0,
    li1:15.8,
    cnt: 12,
    amt:34,
  },
  {
    name: "Dec 2022",
    ug: 0.4,
    pp: 0.4,
    py: 17.1,
    pb:0,
    li1:17.9,
    cnt: 8,
    amt:39,
  },
  {
    name: "Mar 2023",
    ug: 0.1,
    pp: 0.1,
    py: 4.4,
    pb:0,
    li1:4.6,
    amt:0,
    
  },
];

export default function Graph() {
  return (
    <>
    <ResponsiveContainer width="100%"  aspect={3}> 
    
     <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 40,
        right: 20,
        bottom: 20,
        left: 20
      }}
      >
        
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis className="x" dataKey="name" scale="band"  label={{value:'Timeline',angle:360,position: 'bottom', bottom:0, top:5000 , fontSize:30 , }}/>
      <YAxis   label={{ value: 'Amount in BUSD', angle: -90, position: 'insideLeft' }} />
      <YAxis  yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: '% Growth', angle: 90, position: 'insideRight', className :"v"  }}/>
      <Tooltip />
      <Legend display={true } position="bottom" align="end" />
      <Bar dataKey="pb" stackId="a" fill="blue" />
      <Bar dataKey="py" stackId="a" fill="yellow" />
      <Bar dataKey="pp" stackId="a" fill="red" />
      <Bar dataKey="ug" stackId="a" fill="#39b856" />
        
      <Line yAxisId="right"  type="monotone" dataKey="li1" stroke="#ff7300"  />
      <Line     type="monotone" dataKey="cnt" stroke="black" />
     < LineChart />
    </ComposedChart>

    </ResponsiveContainer>
    
   
    </>
  
  );
}


