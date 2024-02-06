import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import useFetch from "../hooks/useFetch";
import LineChart from "./LineChart";
import { useState } from "react";

Chart.register(CategoryScale);

export default function ShowGraph(){
    const [chartData, setChartData] = useState(null);

    const initChartData = (data) => {
        setChartData({
            labels: data.map((run) => run.date),
            datasets: [
                {
                    label: "5k time ",
                    yAxisID: 'times',
                    data: data.map((run) => run.time),
                    backgroundColor: [
                        "rgba(75,192,192,1)"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                },{
                    label: "Heart Rate",
                    yAxisID: "hr",
                    data: data.map((run) => run.finalHeartRate),
                    borderColor: "Red",
                    backgroundColor: [
                        "black"
                    ],
                    borderWidth: 2
                }
            ]
        });
    };

    useFetch("http://localhost:3001/runs", initChartData);

    return (
        <div className="App">
            {chartData && <LineChart chartData={chartData}/>}
        </div>
    );
}