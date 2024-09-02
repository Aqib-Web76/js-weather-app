const apiKey = "ddf0c09e9e62f514dd1928d8348c1823";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".invalid").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        var data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round( data.main.temp ) + "<sup>o</sup>c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
         else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
         else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else {
            weatherIcon.src = "images/notfound.webp"; // Use a default image for unmatched conditions
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".invalid").style.display = "none";
        
    }
   

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

