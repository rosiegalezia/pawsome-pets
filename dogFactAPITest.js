import dogs from './src/assets/dogFacts.json';


let selectedBreed ; //what the user selects from the drop down
let selectedBreedID ; // what the dog api breed id is based on the users selection above. 

// Need to import dogFacts.json into react when i move it over to a component/page
// How do I get a list of all the dog breeds and ID's from the json? 
// How do I take user input for dog breed and return dog breed ID??


// function to randomly generate a number to use in the dog fact API so that a random dog breed is called from the API
const randomDogBreedID = () => console.log(Math.floor(Math.random()* 264) + 1); 



/******************************** Dog Fact API call ***********************************************/

const apiKey = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7"; 
/*TEST API*/let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=41&api_key=" + apiKey; //breed_ids=41 should bring up Bernese Mountain Dog
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