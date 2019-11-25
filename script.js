//User inputs information to search for city weather

//weather info pops up on jumbotron

//five day forecast appears beneath jumbotron

//search history of cities appear below search bar

const searchCity = document.getElementById("searchCity");
const cityInput = document.getElementById("cityInput");

function findWeather(){

    searchCity.addEventListener("click", function(){
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&appid=52ea047875fb2135ea949a32ca9139be";
        

    })

}



