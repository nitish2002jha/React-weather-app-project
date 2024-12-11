import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1693711836001-99859bb7185a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
      const HOT_URL = "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
      const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
      const RAIN_URL = "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UkFJTiUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";


    return(
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL:info.temp>15 ? HOT_URL: COLD_URL}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 ?
             <ThunderstormIcon />
             :info.temp>15 
             ? <WbSunnyIcon/>
             : <AcUnitIcon/>
}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component={"span"}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>

          <p>Min Temp= {info.tempMin}&deg;C</p>
          <p>Max Temp= {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  
            </div>


        
    )

}