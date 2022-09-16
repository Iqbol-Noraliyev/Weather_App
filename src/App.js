import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
    const [data, setData] = useState({})
    const [locition, setLocition] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locition}&units=imperial&appid=d6c934afc43f74604a63d91058011db6`

    const searchLocition = (event) => {
        if(event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocition('')
        }
       
    }

    return ( 
            < div className = 'app' >
                <div className='search'>
                    <input type='text'
                    value={locition}
                    onChange={event => setLocition(event.target.value)}
                    onKeyPress={searchLocition}
                    placeholder='Enter Locition'
                    />
                    
                </div>
                <div className = 'container' >
                    <div className = 'top' >
                        <div className = 'locition' >
                            <p>{data.name}</p> 
                        </div >
                        < div className = 'temp' >
                            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                        </ div > 
                        <div className = 'description' >
                            {data.weather ? <p>{data.weather[0].main}</p> : null}
                        </div > 
                    </div> 

                    {data.name != undefined && 
                    <div className = 'buttom' >
                    <div className = 'feels' >
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null }
                        <p className='bold'>Feels Like</p>   
                    </div> 
                    <div className = 'humidity' >
                        {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null} 
                        <p className='bold'>Humidity</p>
                    </div > 
                    <div className = 'wind' >
                        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                        <p className='bold'>Wind Speed</p>
                    </div> 
                </div >
                    }

                     


                </div> 
            </div >
    );
}

export default App;