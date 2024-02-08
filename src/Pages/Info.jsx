/*********** TO DO ************/

// Set it up not to run dogFact API until a breed is selected and show info btn clicked



//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Imported Component 
import FactCard from '../Components/FactCard';

//Imported Other
import dogBreeds from '../assets/dogBreeds.json';
import { useEffect, useState } from 'react';

function Info() {

    const [breedID, setBreedID] = useState(1); // can we set to null and then - if breedID = null --> do not run API/render card
    console.log(breedID);
    const handleBreedChange = (event) => {
        console.log(event.target.value);
        let selectedBreed = event.target.value;
        let breedObj = dogBreeds.find((breed) => breed.breed == selectedBreed)
        setBreedID(breedObj.id.split('-')[1]); 
        
        
    };


/************************************* Dog Facts API *************************************/
        const [cardFact, setCardFact] = useState('');
        
                const apiKey = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7"; 
/*TEST API    let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=41&api_key=" + apiKey; //breed_ids=41 should bring up Bernese Mountain Dog */
        
let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=" + breedID + "&api_key=" + apiKey; 

       const handleShowInfoClick = () => {
            fetch(queryURLDogFacts)
                .then(function(response){
                    return response.json();
                }).then(function (data){
                    let dog = data[0].breeds[0];

                    console.log(data);
                    console.log('dog id: ' + dog.id);
                    console.log('dog breed: ' + dog.name);
                    console.log('breed group: ' + dog.breed_group);
                    console.log('bred for: ' + dog.bred_for);
                    console.log('life span: ' + dog.life_span);
                    console.log('temperament: ' + dog.temperament);
                    
                    setCardFact();
                });
            };
    /******************************************************************************************/


    return (
        <div className='page-container'>
            <div className='page-content'>
                <h2 className='p-3 m-3 text-center'>Select a dog breed to learn more about them!</h2>

                <Form className='m-3'> 
                    <fieldset >
                    {/* This is another iput drop down to choose cat or dog */}
                    {/* <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Select your animal</Form.Label>
                            <Form.Select id="disabledSelect" onChange={handleAnimalChange}>
                                <option>Please select an animal</option>
                                <option>Cat</option>
                                <option>Dog</option>
                            </Form.Select>
                        </Form.Group> */}
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Select your breed</Form.Label>
                            <Form.Select onChange={handleBreedChange} id="disabledSelect">
                                <option id="breed-select">Please select a breed</option>
                                {/* Add here an if/else statement if user choose cat or dog */}
                                {dogBreeds.map((breed) => {
                                    return <option id={breed.id}>{breed.breed}</option>
                                })};
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit" onClick={handleShowInfoClick}>Show Info</Button>
                        <Button type="random-breed" className="ms-2">Pick a random breed</Button>
                    </fieldset>
                </Form>

                <FactCard />
            </div>

        </div>
    )
}

export default Info;