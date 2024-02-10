/*********** TO DO ************/

// Set up input boxes so that the user selects an animal and then the next input becomes live/appears with the relevant animal breed list
// Find out what id="disabledSelect" is on the form - should it be different (without disabled?)
// Buttons: 
    /* Should the btns go at the end of input box or below...? Depends if we also have a 'select animal'
     input box. If so, add 'pick random breed' btn at end of 'select breed' input and then the 'show info'
     btn underneath??
    */


//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Imported Component 
import FactCard from '../Components/FactCard';

//Imported Other
import dogBreeds from '../assets/dogBreeds.json';
import { useState } from 'react';

import '../Components/Components.css'


function Info() {

    const handleAnimalChange = () => {
        // when cat is selected, then the cat breed drop down is shown
        // when  dog is selected, then the dog breed drop down is shown
    };

    //variable used in the dog API URL
    const [breedID, setBreedID] = useState(1); // can we set to null and then - if breedID = null --> do not run API/render card
    console.log(breedID);

    // Function to take users breed selection and obtain the API breed ID number to use in API URL call
    const handleBreedChange = (event) => {
        console.log(event.target.value);
        let selectedBreed = event.target.value;
        let breedObj = dogBreeds.find((breed) => breed.breed == selectedBreed)
        let apiBreedID = breedObj.id.split('-')[1]; //get the number from the id key in the json file so we can pass just the number for the API key
        setBreedID(apiBreedID);         
    };


/************************************* Dog Facts API *************************************/
    const [cardFact, setCardFact] = useState('');
    console.log(cardFact);
        
                const apiKey = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7"; 
/*TEST API    let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=41&api_key=" + apiKey; //breed_ids=41 should bring up Bernese Mountain Dog */
        
    let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=" + breedID + "&api_key=" + apiKey; 

    const handleShowInfoClick = () => {
        fetch(queryURLDogFacts)
            .then(function(response){
                return response.json();
            }).then(function (data){
                console.log(data);
                let dog = data[0].breeds[0];

                let dogAPIData = {
                    dogID: dog.id,
                    dogName: dog.name,
                    dogImg: data[0].url,
                    dogBreedGroup: dog.breed_group,
                    dogBredFor: dog.bred_for,
                    dogLifeSpan: dog.life_span,
                    dogTemperament: dog.temperament
                };

                console.log('dog id: ' + dog.id);
                console.log('dog breed: ' + dog.name);
                console.log('dog img: ' + data[0].url);
                console.log('breed group: ' + dog.breed_group);
                console.log('bred for: ' + dog.bred_for);
                console.log('life span: ' + dog.life_span);
                console.log('temperament: ' + dog.temperament);
                
                setCardFact(dogAPIData);
            });
    };
    /******************************************************************************************/


    return (
        <div className='page-container'>
            <div className='page-content'>
                <h2 className='p-3 m-3 pt-5 text-center'>Select a dog breed to learn more about them!</h2>

                <Form className='m-3'>
                    <fieldset >
                    {/* This is another iput drop down to choose cat or dog */}
                        <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column" style={{ width: "50%" }}>
                            <Form.Select id="disabledSelect" onChange={handleAnimalChange}>
                                <option>Please select an animal</option>
                                <option>Cat</option>
                                <option>Dog</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column" style={{ width: "50%" }}>
                            <Form.Select onChange={handleBreedChange} id="disabledSelect">
                                <option id="breed-select">Please select a breed</option>
                                {/* Add here an if/else statement if user choose cat or dog */}
                                {dogBreeds.map((breed) => {
                                    return <option id={breed.id}>{breed.breed}</option>
                                })};
                            </Form.Select>
                        </Form.Group>
                        <div className="mb-3 mx-auto d-flex justify-content-center">
                            <Button className='btn-brown' variant="primary" type="submit" onClick={handleShowInfoClick}>Show Info</Button>
                            <Button className='btn-brown ms-2 btn-primary' variant="primary" type="random-breed">Pick a random breed</Button>
                        </div>
                    </fieldset>
                </Form>

                <FactCard 
                    // key={FactCard.}
                    dogName={FactCard.dogName}
                    dogImg={FactCard.dogImg}
                    dogBreedGroup={FactCard.dogBreedGroup}
                    dogBredFor={FactCard.dogBredFor}
                    dogLifeSpan={FactCard.dogLifeSpan}
                    dogTemperament={FactCard.dogTemperament}
                />
            </div>

        </div>
    )
};

export default Info;
