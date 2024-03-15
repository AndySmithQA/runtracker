import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import useFetch from "../hooks/useFetch";
import LineChart from "./LineChart";
import { useState } from "react";

Chart.register(CategoryScale);

export default function ShowGraph(){
    const [chartData, setChartData] = useState(null);

    const initChartData = (data) => {
        const quickestTime = Math.min(...data.map((run) => run.time));
        const fastestk1 = Math.min(...data.map((run) => run.k1));
        const fastestk2 = Math.min(...data.map((run) => run.k2));
        const fastestk3 = Math.min(...data.map((run) => run.k3));
        const fastestk4 = Math.min(...data.map((run) => run.k4));
        const fastestk5 = Math.min(...data.map((run) => run.k5));

        const averageK1 = data.reduce((sum, run) => sum + run.k1, 0) / data.length;
        const averageK2 = data.reduce((sum, run) => sum + run.k2, 0) / data.length;
        const averageK3 = data.reduce((sum, run) => sum + run.k3, 0) / data.length;
        const averageK4 = data.reduce((sum, run) => sum + run.k4, 0) / data.length;
        const averageK5 = data.reduce((sum, run) => sum + run.k5, 0) / data.length;

        const averageTime = data.reduce((sum, run) => sum + run.time, 0) / data.length;

        
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
                    data: data.map((run) => run.fHR),
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