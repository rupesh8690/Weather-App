import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";

import "./SearchBox.css";
import { useState } from "react";
function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "714d0c558e9bab653b4c7978a38edc3a";

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);


  let getWeatherInfo = async () => {

    try
    {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
  
      let jsonResponse = await response.json();
      console.log(jsonResponse);
  
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
  
      console.log(result);
      return result;

    }
    catch(err){
      throw err;

    }

  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);

    }catch(err){
      setError("No such place in our API")
    }
  
  };
  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          required
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={{color: "red"}}>No such place found</p>}
      </form>
    </div>
  );
}

export default SearchBox;
