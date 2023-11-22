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

// Grab the weather of the city based on the cordinates from GetCordinates(), and sends them to the proper div card OR the current day.
 async function GetWeather(){
 const ForecastCall = await fetch ("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=513b2f121ba24b289f75ea98532934e4");
 let Forecast = ForecastCall.json();
 const firstday = document.getElementById("box1")
 console.log(firstday)

 console.log(Forecast);
 }

