// global variables
const city = "jim thorpe"
let lat = ""
let lon = ""
// grab the cordinates of the city based on the entered name.
async function GetCordinates(){
    const cordsCall = await fetch ("http://api.openweathermap.org/geo/1.0/direct?q=" + (city) + "&limit=1&appid=513b2f121ba24b289f75ea98532934e4")
    let cords = await cordsCall.json()
    lat = cords[0].lat
    lon = cords[0].lon
    GetWeather()
}

GetCordinates()

// Grab the weather of the city based on the cordinates from GetCordinates()
 async function GetWeather(){
 const ForecastCall = await fetch ("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=513b2f121ba24b289f75ea98532934e4");
 let Forecast = ForecastCall.json()

 console.log(Forecast)
 }

