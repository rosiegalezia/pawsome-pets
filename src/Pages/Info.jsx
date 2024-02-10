/*********** TO DO ************/

// When you click 'show info' btn again, the card disappears, then you click it again and then it renders. Think it's to do with 'setCardShown(!cardShown)'
// Find out what id="disabledSelect" is on the form (React Bootstrap) - should it be different? (without disabled?)
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
import DropDown from '../Components/DropDown';

//Imported Other
import dogBreeds from '../assets/dogBreeds.json';
import { useState } from 'react';

import '../Components/Components.css'


function Info() {
    const[cardShown, setCardShown] = useState(false);
    const[animalChoice, setAnimalChoice] = useState('');

    // when cat is selected, then the cat breed drop down is shown + buttons
    // when  dog is selected, then the dog breed drop down is shown + buttons

    // updates animalChoice to cat or dog so that it can be used to show relevant breed dropdown
    const handleAnimalChange = (event) => {
        let animalChosen = event.target.value;
        setAnimalChoice(animalChosen);
    }

    // get a random breed object from the json
    const generateRandom = () => {
        let randomBreed = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
        console.log(randomBreed.breed)
        return randomBreed;
    }
   
    
    //variable used in the dog API URL
    const [breedID, setBreedID] = useState(''); 
    // console.log(`Dog Breed ID = ${breedID}`);

    // Function to take users breed selection and obtain the API breed ID number to use in API URL call
    const handleBreedChange = (event) => {
        console.log(`User selected ${event.target.value}`);
        let selectedBreed = event.target.value;

        // declare breedObj variable
        let breedObj;

        // if user has selected a breed manually, set breedObj equal to that, otherwise set to randomBreed
        if (selectedBreed) {
            breedObj = dogBreeds.find((breed) => breed.breed == selectedBreed)
        } else {
            breedObj = generateRandom();
        }

        console.log(breedObj)

        // same for randomly generated or user selected
        let apiBreedID = breedObj.id.split('-')[1]; //get the number from the id key in the json file so we can pass just the number for the API key
        setBreedID(apiBreedID);
    };

    /************************************* Cat & Dog Facts API *************************************/
    const [cardFact, setCardFact] = useState('');

    const apiKey = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7";   
    let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=" + breedID + "&api_key=" + apiKey; 

    const handleShowInfoClick = () => {
        if(animalChoice === 'Dog'){
            fetch(queryURLDogFacts)
                .then(function(response){
                    return response.json();
                }).then(function (data){
                    console.log(data);
                    let dog = data[0].breeds[0];

                    let dogAPIData = {
                        dogID: dog.id || 'No information available',
                        dogName: dog.name || 'No information available',
                        dogImg: data[0].url || 'No information available',
                        dogBreedGroup: dog.breed_group || 'No information available',
                        dogBredFor: dog.bred_for || 'No information available',
                        dogLifeSpan: dog.life_span || 'No information available',
                        dogTemperament: dog.temperament || 'No information available'
                    };               
                    setCardFact(dogAPIData);
                });
        }
{/**************************ADD CAT STUFF*/}

        // }else if(animalChoice === 'Cat'){
        //     fetch(queryURLCatFacts)
        //         .then(function(response){
        //             return response.json();
        //         }).then(function (data){
        //             console.log(data);
        //             let cat = data[0].breeds[0];

        //             let catAPIData = {
        //                 catID: cat.id || 'No information available',
        //                 catName: cat.name || 'No information available',
        //                 catImg: data[0].url || 'No information available',
        //                 catBreedGroup: cat.breed_group || 'No information available',
        //                 catBredFor: cat.bred_for || 'No information available',
        //                 catLifeSpan: cat.life_span || 'No information available',
        //                 catTemperament: cat.temperament || 'No information available'
        //             };               
        //             setCardFact(catAPIData);

        //         });
        // }     
    };
    /******************************************************************************************/

    return (
        <div className='page-container'>
            <div className='page-content'>
                <h2 className='p-3 m-3 pt-5 text-center'>Select a dog breed to learn more about them!</h2>
                <Form className='m-3'>
                    <fieldset >

                        {/* This input drop down is to choose cat or dog */}

                        <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column" style={{ width: "50%" }}>
                            <Form.Select id="disabledSelect" onChange={handleAnimalChange}>
                                <option>Please select an animal</option>
                                <option>Cat</option>
                                <option>Dog</option>
                            </Form.Select>
                        </Form.Group>

                        {/*If user selects Cat then the Cat breed drop down is rendered along with btns*/}
{/**************************ADD CAT STUFF*/}
                        {animalChoice === 'Cat' ? (<>
                            <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column" style={{ width: "50%" }}>
                                <Form.Select onChange={handleBreedChange} id="disabledSelect">
                                    <option id="breed-select">Please select a breed</option>
                                    <option id="cat-breed-1">Cat Breed 1</option>
                                    {/* {catBreeds.map((breed) => {
                                        return <option id={breed.id}>{breed.breed}</option>
                                    })}; */}
                                </Form.Select>
                            </Form.Group>
                            <div className="m-4 mx-auto d-flex justify-content-center">
                                <Button className='btn-brown' variant="primary" type="submit" onClick={() => {handleShowInfoClick() 
                                    setCardShown(true)}}>Show info</Button>
                                <Button className='btn-brown ms-2 btn-primary' variant="primary" type="random-breed">Pick a random breed</Button>
                        </div> 
                        </>) : null}

                        {/*If user selects Dog then the Dog breed drop down is rendered along with btns*/}
                        {animalChoice === 'Dog' ? (<>
                        <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column" style={{ width: "50%" }}>
                            <Form.Select onChange={handleBreedChange} id="disabledSelect">
                                <option id="breed-select">Please select a breed</option>
                                {dogBreeds.map((breed) => {

                                    // ADDED KEY TO GET RID OF THE ERROR IN CONSOLE. NOT SURE IF id={breed.id} IS NEEDED?
                                    return <option id={breed.id} key={breed.id}>{breed.breed}</option>
                                })};
                            </Form.Select>
                        </Form.Group> 
                        <div className="m-4 mx-auto d-flex justify-content-center">
                            <Button className='btn-brown' variant="primary" type="submit" onClick={() => {handleShowInfoClick() 
                                setCardShown(true)}}>Show info</Button>
                            <Button className='btn-brown ms-2 btn-primary' variant="primary" type="random-breed">Pick a random breed</Button>
                        </div> 
                        </>) : null}

                        {/* <div className="m-4 mx-auto d-flex justify-content-center">
                            <Button className='btn-brown' variant="primary" type="submit" onClick={() => {handleShowInfoClick() 
                                setCardShown(!cardShown)}}>Show info</Button>
                            <Button className='btn-brown ms-2 btn-primary' variant="primary" type="random-breed">Pick a random breed</Button>
                        </div> */}
                    </fieldset>
                </Form>

                {/*If user selects Cat then the Cat breed info is rendered onto the FactCard*/}
{/**************************ADD CAT STUFF*/}
                {cardShown === true && animalChoice === 'Cat' ? (<FactCard 
                    key={cardFact.dogID}
                    dogName={cardFact.dogName}
                    dogImg={cardFact.dogImg}
                    dogBreedGroup={cardFact.dogBreedGroup}
                    dogBredFor={cardFact.dogBredFor}
                    dogLifeSpan={cardFact.dogLifeSpan}
                    dogTemperament={cardFact.dogTemperament}
                    handleShowInfoClick={handleShowInfoClick}
                />) : null}

                {/*If user selects Dog then the Dog breed info is rendered onto the FactCard*/}
                {cardShown === true && animalChoice === 'Dog' ? (<FactCard 
                    key={cardFact.dogID}
                    dogName={cardFact.dogName}
                    dogImg={cardFact.dogImg}
                    dogBreedGroup={cardFact.dogBreedGroup}
                    dogBredFor={cardFact.dogBredFor}
                    dogLifeSpan={cardFact.dogLifeSpan}
                    dogTemperament={cardFact.dogTemperament}
                    handleShowInfoClick={handleShowInfoClick}
                />) : null} 
            </div>
        </div>
    )
};

export default Info;
