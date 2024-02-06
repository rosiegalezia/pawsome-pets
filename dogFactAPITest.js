
// let queryURLWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + destination + "&units=metric&appid=6b4a10c6ed815160709463b2908e2d4d";

let apiKey = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7"; 
let queryURLDogFacts = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=" + apiKey;


fetch(queryURLDogFacts)
    .then(function(response){
        return response.json();
    }).then(function (data){

    });