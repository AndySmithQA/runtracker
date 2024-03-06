import { useLoaderData, Link } from 'react-router-dom'
import ShowGraph from './graph/ShowGraph'

export default function Runs() {
    const runs = useLoaderData()
    const quickestTime = Math.min(...runs.map((run) => run.time));
    const fastestk1 = Math.min(...runs.map((run) => run.k1));
    const fastestk2 = Math.min(...runs.map((run) => run.k2));
    const fastestk3 = Math.min(...runs.map((run) => run.k3));
    const fastestk4 = Math.min(...runs.map((run) => run.k4));
    const fastestk5 = Math.min(...runs.map((run) => run.k5));
    return (
        <div className="runs">
            <div className="stat">Record Run - {quickestTime}</div>
        
                <p className='rec'>Fastest 1st K - {fastestk1}</p>
                <p className='rec'>Fastest 2nd K - {fastestk2}</p>
                <p className='rec'>Fastest 3rd K - {fastestk3}</p>
                <p className='rec'>Fastest 4th K - {fastestk4}</p>
                <p className='rec'>Fastest 5th K - {fastestk5}</p>
           
            
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