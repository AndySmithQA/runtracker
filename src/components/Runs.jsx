import { useLoaderData, Link } from 'react-router-dom'
import ShowGraph from './graph/ShowGraph'

export default function Runs() {
    const runs = useLoaderData()
    return (
        <div className="runs">
             <ShowGraph />
             <div className="times">
            {runs.map(run => (
               <Link to={run.id.toString()} key={run.id}>
                    <p>Time taken - {run.time}</p> <br />
                    <p>On {run.date}</p>
                    <div className="splits">
                       
                       <p>1 - {run.k1}</p> 
                        <p>2 - {run.k2}</p> 
                        <p>3 - {run.k3}</p> 
                        <p>4 - {run.k4}</p> 
                        <p>5 - {run.k5}</p>
                    </div>
               </Link> 
               
            ))}
           </div>
        </div>
    )
}

//loader

export const runsLoader = async () => {
    const res = await fetch('http://localhost:3001/runs')

    return res.json()
}