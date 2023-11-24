// global variables
let lat = ""
let lon = ""




// code ran when page has loaded.
function onload(){
    const submitbtn = document.getElementById("submit");
    submitbtn.addEventListener("click",GetCordinates);
}




// grab the cordinates of the city based on the entered name, sends them to weather call.
async function GetCordinates(){
    const city = document.getElementById("cityentry").value;
    const cordsCall = await fetch ("http://api.openweathermap.org/geo/1.0/direct?q=" + (city) + "&limit=1&appid=513b2f121ba24b289f75ea98532934e4");
    let cords = await cordsCall.json();
    lat = cords[0].lat;
    lon = cords[0].lon;
    GetWeather();
}

// Grab the weather of the city based on the cordinates from GetCordinates()
 async function GetWeather(){
 const ForecastCall = await fetch ("https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&appid=513b2f121ba24b289f75ea98532934e4");
 let Forecast = await ForecastCall.json();
 console.log(Forecast)
 for (let i = 1; i < 6; i++) {
    let activecard = document.getElementById("box" + String(i))
    activecard.innerText = (Forecast.list[i].dt_txt)
    console.log(Forecast.city.name)
  }
 }

 

