

//User inputs information to search for city weather

//weather info pops up on jumbotron

//five day forecast appears beneath jumbotron

//search history of cities appear below search bar

storageData = window.localStorage;

const searchCity = document.getElementById("searchCity");
const cityInput = document.getElementById("cityInput");

//taken from https://sceendy.com/blog/2017/09-27-weather-widget-tutorial/ 

// const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
// const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
// const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

//  $("#searchCity").on("click", function(event){
//         event.target.preventDefault;
//         localStorage.setItem("city", city)
//         localStorage.getItem("user")  



// function saveHistory(){

//   document.querySelectorAll(".btn").forEach(function(save){
//     save.addEventListener("click", function(){
//       let inputVal = save.getAttribute("value");

//       console.log(inputVal);
//     saveInput(inputVal);  

//     })
//   )}
// }




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

    searchCity.addEventListener("click", function(event){

        let fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&appid=0eb7a574ca817a0762b55aa593d91036";
        event.preventDefault();



        console.log(fiveDay);

        axios.get(fiveDay)
        .then(function(response){

//Taken from Jake OToole

let fiveDayWeather = [];


for(let i=0; i < response.data.list.length; i++){
                const timeUNIX = response.data.list[i].dt;
                const stringTime = timeUNIX.toString();
                const dateFormatted = moment(stringTime, "X").format("MM/DD/YYYY")
                const timeFormatted = moment(stringTime, "X").format("HH:mm")
                if(timeFormatted === "12:00"){
                    const dayWeather = {
                        date: dateFormatted,
                        time: timeFormatted,
                        weatherDescription: response.data.list[i].weather[0].description,
                        weatherIcon: response.data.list[i].weather[0].icon,
                        temp: response.data.list[i].main.temp,
                        humidity: response.data.list[i].main.humidity
                    }
                    console.log("Day Weather: ", i, dayWeather)
                    fiveDayWeather.push(dayWeather);
                }
            }

            console.log(fiveDay);
            console.log(response);
            console.log(fiveDayWeather);

        // document.querySelector(".dayOne").innerHTML = "Temperature (F) " + response.data.main.temp;
        // document.querySelector(".wind").innerHTML = "Wind Speed: " + response.data.wind.speed;
        // document.querySelector(".humidity").innerHTML = "Humidity: " + response.data.main.humidity;
        // document.querySelector(".temp").innerHTML = "Temperature (F) " + response.data.main.temp;

console.log(document.querySelector(".dayOne"));

        })

    })

}
fiveDayForecast()

}
  
findWeather()