let selectedBreed ; //what the user selects from the drop down
let selectedBreedID ; // what the dog api breed id is based on the users selection above. 

const apiKey = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7"; 
let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=41&api_key=" + apiKey; //breed_ids=41 should bring up Bernese Mountain Dog
// let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=" + selectedBreedID + "&api_key=" + apiKey; 


fetch(queryURLDogFacts)
    .then(function(response){
        return response.json();
    }).then(function (data){
        let dog = data[0].breeds[0];

        console.log(data);
        console.log('dog id: ' + dog.id);
        console.log('dog name: ' + dog.name);
        console.log('breed group: ' + dog.breed_group);
        console.log('bred for: ' + dog.bred_for);
        console.log('life span: ' + dog.life_span);
        console.log('temperament: ' + dog.temperament);
    });