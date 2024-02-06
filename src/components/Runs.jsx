import { useLoaderData, Link } from 'react-router-dom'
import ShowGraph from './graph/ShowGraph'

export default function Runs() {
    const runs = useLoaderData()
    return (
        <div className="runs">
             <ShowGraph />
            {runs.map(run => (
               <Link to={run.id.toString()} key={run.id}>
                    <p>Time taken - {run.time}</p> <br />
                    <p>On {run.date}</p>
               </Link> 
            ))}
           
        </div>
    )
}

//loader

export const runsLoader = async () => {
    const res = await fetch('http://localhost:3001/runs')

    return res.json()
}