

//User inputs information to search for city weather

//weather info pops up on jumbotron

//five day forecast appears beneath jumbotron

//search history of cities appear below search bar

const searchCity = document.getElementById("searchCity");
const cityInput = document.getElementById("cityInput");

//taken from https://sceendy.com/blog/2017/09-27-weather-widget-tutorial/ 

// const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
// const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
// const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

function findWeather(){

    searchCity.addEventListener("click", function(event){
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&units=imperial&appid=52ea047875fb2135ea949a32ca9139be";
        event.preventDefault();
        
        console.log(queryURL);

       axios.get(queryURL)
       .then(function(response){


        console.log(queryURL);
        console.log(response);

        //Copied from previous activity

        document.querySelector(".city").innerHTML = "Weather Details: " + response.data.name;
        document.querySelector(".wind").innerHTML = "Wind Speed: " + response.data.wind.speed;
        document.querySelector(".humidity").innerHTML = "Humidity: " + response.data.main.humidity;
        document.querySelector(".temp").innerHTML = "Temperature (F) " + response.data.main.temp;

        console.log("Wind Speed: " + response.data.wind.speed);
        console.log("Humidity: " + response.data.main.humidity);
        console.log("Temperature (F): " + response.data.main.temp);

       });

        
        

    });

    function fiveDayForecast(){

    searchCity.addEventListener("click", function(){

        let fiveDay = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityInput.value + "&appid=0eb7a574ca817a0762b55aa593d91036";
        event.preventDefault();

        console.log(fiveDay);

        axios.get(fiveDay)
        .then(function(response){

            console.log(fiveDay);
            console.log(response);

        // document.querySelector(".city").innerHTML = "Weather Details: " + response.data.name;
        // document.querySelector(".wind").innerHTML = "Wind Speed: " + response.data.wind.speed;
        // document.querySelector(".humidity").innerHTML = "Humidity: " + response.data.main.humidity;
        // document.querySelector(".temp").innerHTML = "Temperature (F) " + response.data.main.temp;



        })

    })

}

}
findWeather()





