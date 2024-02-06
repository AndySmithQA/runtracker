import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>5K times</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "5k Times"
            },
            legend: {
              display: true
            }
          },
          scales: {
            times:{
              type: 'linear',
              position: "left",
              title: {
                display: true,
                text: "Minutes"
              }
            },
            hr:{
              type: 'linear',
              position: 'right',
              title: {
                display: true,
                text: "Final Heart rate (BPM)"
              }
            }
          }
        }
      }
      />
    </div>
  );
}
export default LineChart;