```javascript
const API_KEY = "YOUR_API_KEY_HERE";


function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    const errorMessage =
        document.getElementById("errorMessage");


    if (city === "") {

        errorMessage.textContent =
            "Please enter a city name.";

        return;
    }


    const url =
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&appid="
        + API_KEY
        + "&units=metric";


    fetch(url)

        .then(function(response) {

            if (!response.ok) {

                throw new Error("City not found");

            }

            return response.json();

        })


        .then(function(data) {

            // City
            document.getElementById("cityName").textContent =
                data.name;


            // Temperature
            document.getElementById("temperature").textContent =
                Math.round(data.main.temp) + " °C";


            // Weather description
            document.getElementById("description").textContent =
                data.weather[0].description;


            // Humidity
            document.getElementById("humidity").textContent =
                data.main.humidity + " %";


            // Wind speed
            document.getElementById("windSpeed").textContent =
                data.wind.speed + " m/s";


            // Weather icon
            const icon =
                "https://openweathermap.org/img/wn/"
                + data.weather[0].icon
                + "@2x.png";


            document.getElementById("weatherIcon").src =
                icon;


            errorMessage.textContent = "";

        })


        .catch(function(error) {

            console.log(error);


            errorMessage.textContent =
                "❌ City not found or API key is invalid.";

        });

}


// Press Enter to search

document.getElementById("cityInput")

    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            getWeather();

        }

    });
```