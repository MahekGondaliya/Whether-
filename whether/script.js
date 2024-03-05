const apikey = "4b168ef28865e08cde6285325ae9c82f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");

const searchbtn = document.querySelector(".search button");

const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "clouds") {
            weathericon.src = "images/clouds.png";
        }

        if (data.weather[0].main == "rain") {
            weathericon.src = "images/rain.png";
        }

        if (data.weather[0].main == "clear") {
            weathericon.src = "images/clear.png";
        }

        if (data.weather[0].main == "drizzle") {
            weathericon.src = "images/drizzle.png";
        }

        if (data.weather[0].main == "mist") {
            weathericon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})
