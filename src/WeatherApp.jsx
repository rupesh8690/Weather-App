import SearchBox from "./SearchBox";
import  "./SearchBox.css"
import { useState } from "react";
import InfoBox from "./InfoBox";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",

    });
    
    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }
    return(

        <>
         <div className="InfoBox"> <h2>Weather App by Delta</h2></div>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
        
        </>
    
  
     
    )
}