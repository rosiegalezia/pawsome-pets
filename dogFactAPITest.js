
// let queryURLWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + destination + "&units=metric&appid=6b4a10c6ed815160709463b2908e2d4d";

let apiKey = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7"; 
// let breed = "Labrador";
// let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids="+ breed +"&api_key=" + apiKey;
let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=41&api_key=" + apiKey; //breed_ids=41 should bring up Bernese Mountain Dog


fetch(queryURLDogFacts)
    .then(function(response){
        return response.json();
    }).then(function (data){
        console.log(data);
    });