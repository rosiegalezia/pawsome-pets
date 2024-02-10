// For dogs only

import dogBreeds from '../assets/dogBreeds.json';


// //variable used in the dog API URL
// const [breedID, setBreedID] = useState(1); // can we set to null and then - if breedID = null --> do not run API/render card
// console.log(breedID);

// // Function to take users breed selection and obtain the API breed ID number to use in API URL call
// const handleBreedChange = (event) => {
//     console.log(event.target.value);
//     let selectedBreed = event.target.value;

//     let breedObj = dogBreeds.find((breed) => breed.breed == selectedBreed)
//     let apiBreedID = breedObj.id.split('-')[1]; //get the number from the id key in the json file so we can pass just the number for the API key
//     setBreedID(apiBreedID);
// };

function Random() {
    const randomBreed = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]

    return (
        console.log(randomBreed)
    )
}

export default Random
