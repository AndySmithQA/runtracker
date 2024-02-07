import { useParams, useLoaderData, Link } from 'react-router-dom'

export default function RunDetails() {
    const { id } = useParams()
    const run = useLoaderData()

    return (
        <div className="run-details">
            <h2>Run Details </h2> <hr /><br></br>
            <h3>Time taken to run 5k - {run.time} (MM:SS)</h3>
            <p>On - {run.date}</p>
            <p>Final Heart Rate - {run.finalHeartRate} BPM</p>
            <p>Back to the <Link to="/">Runs Page</Link></p>
        </div>
    )
}

export const runDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`http://localhost:3001/runs/` + id)

    return res.json()
}