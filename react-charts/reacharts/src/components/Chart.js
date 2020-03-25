import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data = {this.state.chartData}
          options=
          {{}}
          />
      </div>
    );
  }
}
export default Chart;
