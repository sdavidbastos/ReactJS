import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function ChartUse() {
  const [chartData, setChartData] = useState(0);
  const data = {
    chartData: {
      labels: [
        "Boston",
        "Worcester",
        "Springfield",
        "Lowell",
        "Bahia",
        "São Paulo",
        "Piraquê"
      ],
      datasets: [
        {
          label: "Population",
          data: [213131, 123131, 452523, 123134, 676767, 200231, 1000331],
          backgroundColor: [
            "rgba(255,99,132,0.6)",
            "rgba(54,162,235,0.6)",
            "rgba(255,206,86,0.6)",
            "rgba(75,192,192,0.6)",
            "rgba(153,102,255,0.6)",
            "rgba(255,159,64,0.6)",
            "rgba(255,99,132,0.6)"
          ]
        }
      ]
    }
  };
  useEffect(() => {
    if(chartData === 0){
      setChartData(data)
    } else {
      console.log('Não rodou')
    }
  });
  return ( 
    <div className="chart">
      <Bar
       data={chartData}
       options={{}}
       />
    </div>
  );
}

export default ChartUse;
