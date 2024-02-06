import {useEffect} from "react";

export default function useFetch(url, initChartData) {

    useEffect(() => {
        (async function fetchData() {
        const response = await fetch("http://localhost:3001/runs")
        .catch(error => {
            console.error("[ERROR] Cannot fetch because", error);
            if (error.toString().includes("NetworkError")) {
                throw new Error("NETWORK_ERROR");
            } else {
                throw new Error("SYSTEM_ERROR");
            }
        });

        if (response.ok) {
            try {
                const jsonData = await response.json();
                initChartData(jsonData);
            } catch (e) {
                console.warn("[WARN] Error while parsing content.  Likely because of empty body.", e);
                throw new Error("SYSTEM_ERROR");
            }
        }
    })();
    }, []);
}




