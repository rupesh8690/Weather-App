
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
function App() {

  let handleClick= () => {
    console.log("button was clicked")
  }


  return (
    <>
     {/* <SearchBox />
     <InfoBox/> */}
     <WeatherApp/>
    
     </>
  
    
  )
}

export default App
