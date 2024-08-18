import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // icon for cold weather
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // icon for sunny weather
import BeachAccessIcon from "@mui/icons-material/BeachAccess"; //icon fro reainy

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h3>{info.city}
                  {
              info.humidity > 80
                ? <BeachAccessIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <BeachAccessIcon/>
            }</h3>
              <p> Temperature= {info.temp}&deg;C</p>
              <p>Humidity= {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;</p>
              <p>Max Temp= {info.tempMax}&deg;</p>
              The weather can be described as <i>{info.weather} </i> and feels
              like {info.feelslike}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
