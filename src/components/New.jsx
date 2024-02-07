import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function New() {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [finalHeartRate, setHr] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) =>{
            event.preventDefault()
    
            const run = { date, time, finalHeartRate}
            
            fetch('http://localhost:3001/runs', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(run)
            }).then(() => {
                document.getElementById("success").innerHTML = "Record Added"
                navigate('/')
            })
            
    }

    return (
        <div className="form-page">
            <h1>Add new run</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <p>when did you run</p>
                    <input 
                        type="text"
                        value={date}
                        onChange = {(e) => setDate(e.target.value)}
                        placeholder='date of run' 
                    />
                </div>

                <div className="inputs">
                    <p>Time taken to run 5k</p>
                    <input 
                        type="text"
                        value={time}
                        onChange = {(e) => setTime(e.target.value)}
                        placeholder='mm.ss'
                    />
                </div>
                <div className="inputs">
                    <p>Final heart rate (BPM)</p>
                    <input 
                        type="number"
                        value={finalHeartRate}
                        onChange = {(e) => setHr(e.target.value)}
                        placeholder='e.g.170'
                    />
                </div>
                <button type='submit'>Enter Run</button><br />
                <p id="success"></p>
            </form>
        </div>
    )
}