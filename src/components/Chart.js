import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "Nov 2006",
    ug: 20,
    py: 80,
    pb: 110,
    pp: 0,
  },
  {
    name: "Nov 2007",
    ug: 25,
    py: 25,
    pb: 50,
    pp: 0,
  },
  {
    name: "Nov 2008",
    ug: 15,
    py: -50,
    pb: 35,
    pp: 0,
  },
  {
    name: "Nov 2009",
    ug: -20,
    py: -30,
    py1: 80,
    pb: 0,
    pp: 0,
  },
  {
    name: "Nov 2010",
    ug: 10,
    py: -50,
    pb: 50,
    pp: 0,
    py1: 410,
  },
  {
    name: "Nov 2011",

    py: -100,
    pb: 30,
    pp: 0,
    ug: 5,
    py1: 12,
  },
  {
    name: "Nov 2012",

    ug: 0,
    py: 0,
    pb: 15,
    pp: 0,
    py1: 45,
  },
  {
    name: "Nov 2013",
    ug: -25,
    py: 70,
    py1: 70,
    pb: 10,
    pb1: 2,
    pp: 0,
  },
  {
    name: "Nov 2014",
    ug: -30,
    py1: 60,
    py: 80,
    pb: 0,
    pp: 0,
  },
  {
    name: "Nov 2015",
    ug: -30,
    py1: 50,
    py: 370,

    pb: 0,
    pp: 0,
  },
  {
    name: "Nov 2016",
    ug: -20,
    py: -60,
    py1: 35,
    pb: 0,
    pp: 0,
  },
  {
    name: "Nov 2017",
    ug: -10,
    py: 140,
    py1: 40,
    pb: 0,
    pp: 0,
  },
  {
    name: "Nov 2018",
    ug: -12,
    py: 8,
    py1: 40,
    pb: 0,
    pp: 0,
  },
  {
    name: "Nov 2019",
    ug: 5,
    py: 4,
    py1: 30,

    pb: 6,
    pp: 0,
  },
  {
    name: "Nov 2020",
    ug: -20,
    py: 0,
    py1: 20,
    pb: 50,
    pp: 0,
  },
  {
    name: "Nov 2021",
    ug: 13,
    py: -100,
    py1: 30,
    pb: -10,
    pp: 0,
  },
  {
    name: "Dec 2022",
    ug1: 90,
    ug: -100,

    pp: 60,
    py1: 10,
    py: 0,
    pb: -100,
  },
  {
    name: "Mar 2023",
    ug: 0,
    pb1: 0,
    ug1: -80,
    pp: -75,
    py1: -80,
    py: 0,
    pb: 0,
    ug2: -100,
  },
];

export default function Chart() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            className="x"
            dataKey="name"
            scale="band"
            label={{
              value: "Timeline",
              angle: 360,
              position: "bottom",
              bottom: 0,
              top: 4500,
              fontSize: 30,
            }}
          />
          <YAxis
            label={{
              value: "Amount in BUSD",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#82ca9d"
            label={{ value: "% Growth", angle: 90, position: "insideRight" }}
          />
          <Tooltip />
          <Legend display={true} position="end" align="end" />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pb" stackId="a" fill="#8a6d41" />
          <Bar dataKey="pb1" stackId="a" fill="#012405" />
          <Bar dataKey="py1" stackId="a" fill="#045245" />
          <Bar dataKey="py" stackId="a" fill="#5e4902" />
          <Bar dataKey="pp" stackId="a" fill="#782a12" />
          <Bar dataKey="ug" stackId="a" fill="#056cb0" />
          <Bar dataKey="ug1" stackId="a" fill="#99225d" />
          <Bar dataKey="ug2" stackId="a" fill="#02121c" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
