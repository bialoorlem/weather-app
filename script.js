

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



function saveHistory(){

  document.querySelectorAll("searchCity").forEach(function(save){
    save.addEventListener("click", function(){
      let inputVal = save.getAttribute("value");

      console.log(inputVal);
    saveInput(inputVal);  

    })
  })
}

// function pullInput(){

// searchCity.addEventListener("click", function(event) {
//     event.preventDefault();
//     searchCity = document.getElementById("cityInput").value.trim();
//     let dataStr = localStorage.getItem("cityInput") || "[]";
//     // console.log(dataStr.length)
//     let data = JSON.parse(dataStr);
//     // console.log(data)
//     data.push(searchCity);
//     localStorage.setItem("cityInput", JSON.stringify(data));

// });

// function pullInput(){

//   for(i = 0 ; i < 9 ; i ++){
//     let searchHistory = "cityInput" + i;
//     console.log(searchHistory);
//     if(storageData.getItem(searchHistory) === null)
//     {
//       continue;
//     }
//     else{
//     inputs[i].innerHTML = storageData.getItem(searchHistory);
//     }
//   }

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

        let fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&units=imperial&appid=0eb7a574ca817a0762b55aa593d91036";
        event.preventDefault();



        console.log(fiveDay);

        axios.get(fiveDay)
        .then(function(response){

//Taken from Jake OToole with edits to make my own

let fiveDayWeather = [];


for(let i=0; i < 5; i++){
    console.log(response)
                const timeUNIX = response.data.list[i*8].dt;
                console.log(response.data.list[i*8]);
                const stringTime = timeUNIX.toString();
                const dateFormatted = moment(stringTime, "X").format("MM/DD/YYYY")
                const timeFormatted = moment(stringTime, "X").format("HH:mm")
                const dayWeather = response.data.list[i*8].main.temp;
                const humidity = response.data.list[i*8].main.humidity;


                //Code made with help from Bryan and Jake, added my own code, too

                //This is the dynamic HTML where the information will appear under the five day forecast


                let forecastrow = document.getElementById("forecast");
                let newDiv = document.createElement("div");
                newDiv.setAttribute("class", "col-2");
                forecastrow.append(newDiv);
                let newP = document.createElement("p");
                newP.textContent = dateFormatted;
                newDiv.append(newP);
                let newTemp = document.createElement("p");
                newTemp.textContent = dayWeather;
                newDiv.append(newTemp);
                let newHumid = document.createElement("p");
                newHumid.textContent = humidity;
                newDiv.append(newHumid);
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