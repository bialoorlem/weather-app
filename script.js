

//User inputs information to search for city weather

//weather info pops up on jumbotron

//five day forecast appears beneath jumbotron

//search history of cities appear below search bar

const searchCity = document.getElementById("searchCity");
const cityInput = document.getElementById("cityInput");

function findWeather(){

    searchCity.addEventListener("click", function(){
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&appid=52ea047875fb2135ea949a32ca9139be";
        event.preventDefault();
        
        console.log(queryURL);

       axios.get(queryURL)
       .then(function(response){


        console.log(queryURL);
        console.log(response);

        //Copied from previous activity

        document.querySelector(".city").innerHTML = "<h1>" + response.data.name + " Weather Details</h1>";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + response.data.wind.speed;
        document.querySelector(".humidity").innerHTML = "Humidity: " + response.data.main.humidity;
        document.querySelector(".temp").innerHTML = "Temperature (F) " + response.data.main.temp;

        console.log("Wind Speed: " + response.data.wind.speed);
        console.log("Humidity: " + response.data.main.humidity);
        console.log("Temperature (F): " + response.data.main.temp);

       });

        
        

    });

}
findWeather()


