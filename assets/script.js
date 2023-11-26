// global variables
let lat = "none"
let lon = "none"
// date list tracks which list item to read.
datelist = 0
// code ran when page has loaded.
function onload(){
    const submitbtn = document.getElementById("submit");
    submitbtn.addEventListener("click",GetCordinates);
    loadprevious()
}




// grab the cordinates of the city based on the entered name, sends them to weather call.
async function GetCordinates(){
    const city = document.getElementById("cityentry").value;
    const cordsCall = await fetch ("http://api.openweathermap.org/geo/1.0/direct?q=" + (city) + "&limit=1&appid=513b2f121ba24b289f75ea98532934e4");
    let cords = await cordsCall.json();
    try {
        lat = cords[0].lat;
        lon = cords[0].lon;
      } catch (error) {
        console.error("lat was invalid.");
        alert("The entered city was invalid, please check spelling and try again.")
      }
    localStorage.setItem("SearchedCity", city)
    GetWeather5day();

}

// Grab the weather of the city based on the cordinates from GetCordinates()
 async function GetWeather5day(){
 const ForecastCall = await fetch ("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&cnt=40&appid=513b2f121ba24b289f75ea98532934e4&units=imperial");
 let Forecast = await ForecastCall.json();
 console.log(Forecast)
 const firstdaybox = document.getElementById("currentdaybanner");
 const date = String(Forecast.list[0].dt_txt);
 const clouds = String(Forecast.list[0].weather[0].main);
 let cloudicon = decideweathericon(clouds);
 const wind = String(Forecast.list[0].wind.speed);
 const humidity = String(Forecast.list[0].main.humidity);
 const temp = String(Forecast.list[0].main.temp)
 firstdaybox.innerText = (date + "\n" + cloudicon + "\n" + temp + "°F" + "\n" + wind + "MPH" + "\n" + humidity + "% humidity");
//  since the first day is only done once it is excluded from this loop. This loop will do the forecast for the 5 days post today.
 for (let i = 1; i < 6; i++) {
    // defines the active box for the data to be written too.
    let activecard = document.getElementById("box" + String(i));
    // all the data types we need to write to the box.
    const date = String(Forecast.list[datelist].dt_txt);
    const clouds = String(Forecast.list[datelist].weather[0].main);
    const wind = String(Forecast.list[datelist].wind.speed);
    const humidity = String(Forecast.list[datelist].main.humidity);
    const temp = String(Forecast.list[datelist].main.temp)
    // converting clouds to an icon via switch function.
    let cloudicon = decideweathericon(clouds);
    // writing data to weather cards and increasing date list to next day.
    activecard.innerText = (date + "\n" + cloudicon + "\n" + temp + "°F" + "\n" + wind + "MPH" + "\n" + humidity + "% humidity");
    datelist = datelist + 8
}
// resets datelist to zero after for loop has finished
datelist = 0
}

// decides the icon to use for weather.
function decideweathericon(clouds){
    
    switch (clouds){
        case clouds = "Rain":
        cloudicon = "🌧️";
        return cloudicon;
        case clouds = "Clouds":
        cloudicon = "☁️";
        return cloudicon;
        case clouds = "Clear":
        cloudicon = "☀️";
        return cloudicon;
        case clouds = "Snow":
        cloudicon = "🌨️";
        return cloudicon;
        default:
        cloudicon = "???"
        console.log(cloudicon)
        return cloudicon

    }
}

function loadprevious(){
const newbutton = document.createElement("button")
newbutton.setAttribute("class","previous")
newbutton.setAttribute("innerhtml","help")
newbutton.addEventListener("click", )
const previousSearch = document.getElementById("previous")
previousSearch.appendChild(newbutton)
newbutton.setAttribute("class","previous")

}