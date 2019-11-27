

//User inputs information to search for city weather

//weather info pops up on jumbotron

//five day forecast appears beneath jumbotron

//search history of cities appear below search bar

storageData = window.localStorage;

const searchCity = document.getElementById("searchCity");
const cityInput = document.getElementById("cityInput");


//Meant to save search history, but doesn't work

function pullInput(){

    let pullCity = document.getElementById("cityInput");

pullCity.addEventListener("click", function(event) {
    event.preventDefault();
    pullCity = document.getElementById("cityInput").value
    const dataStr = localStorage.getItem("cityInput") || "[]";
    // console.log(dataStr.length)
    const data = JSON.parse(dataStr);
    // console.log(data)
    data.push(response.data.name);
    localStorage.setItem("cityInput", JSON.stringify(data));
    console.log(localStorage);
});

}
pullInput();


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



console.log(document.querySelector(".dayOne"));

        })

        

    })

}
fiveDayForecast()

}
  
findWeather()