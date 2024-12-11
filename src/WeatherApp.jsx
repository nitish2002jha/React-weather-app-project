import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelslike : 8.52,
        temp: 9.05,
        tempMin: 9.05,
        tempMax: 9.05,
        humidity: 61,
        weather:"haze"
      
    });
    let updateInfo = (newInfo) => {
       setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
          <h2>Weather APP </h2> 
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    )

}