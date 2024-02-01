
let btn = document.querySelector(".button")
let img = document.querySelector("img")
let Temp = document.querySelector(".temp")
let cityname = document.querySelector(".city")
let searchbox = document.querySelector("input")
let Humidity = document.querySelector(".humidity")
let Wind = document.querySelector(".wind")


const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const APIKey = "243165bdda11b384a6b84921760ac9e6"


async function cheackwheather(City) {

    const response = await fetch(URL + City + `&appid=${APIKey}`);
    var data = await response.json();
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".cont").style.display = "none"
    } else {
        cityname.innerText = data.name
        Temp.innerText = Math.round(data.main.temp) + "°C"
        Humidity.innerText = data.main.humidity + "%"
        Wind.innerText = data.wind.speed + " km/h"
        if (data.weather[0].main == "Clouds") {
            img.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            img.src = "images/clear.png"
        } else if (data.weather[0].main == "Drizzle") {
            img.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Humidity") {
            img.src = "images/humidity.png"
        } else if (data.weather[0].main == "Mist") {
            img.src = "images/mist.png"
        } else if (data.weather[0].main == "Rain") {
            img.src = "images/rain.png"
        }
        document.querySelector(".cont").style.display = "block"
        document.querySelector(".error").style.display = "none"
        console.log(data);
    }
}

const getcity = () => {

    cheackwheather(searchbox.value)

}

btn.addEventListener("click", getcity)


