/*********** TO DO ************/

// Add a Toast to notify user has saved choice?
// Add Cat stuff

// Find out what id="disabledSelect" is on the form (React Bootstrap) - should it be different? (without disabled?)
// Buttons: 
/* Should the btns go at the end of input box or below...? Depends if we also have a 'select animal'
 input box. If so, add 'pick random breed' btn at end of 'select breed' input and then the 'show info'
 btn underneath??
*/


//Imported Components from React-Bootstrap 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


//Imported Component 
import FactCard from '../Components/FactCard';

//Imported Other
import dogBreeds from '../assets/dogBreeds.json';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
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

    /************************************* Local Storage *************************************/

    const storedAnimals = JSON.parse(localStorage.getItem('animal')) || []; // Sets storedAnimals to anything saved in local storage, but if that is empty, it will initialise as an empty array.
    const[saveAnimal, setSaveAnimal] = useState(storedAnimals);
    console.log(`Animals in local storage:`)
    console.log(saveAnimal)

    // Tracks when saveAnimal variable is updated and then updates local storage
    useEffect (() => {
{/**************************ADD CAT STUFF??? Maybe not now ID is changed??*/}
        const uniqueAnimals = Array.from(new Map(saveAnimal.map(animal => [animal.ID, animal])).values());
        console.log(`this is the unique animals list`, uniqueAnimals)
        localStorage.setItem("animal", JSON.stringify(uniqueAnimals))
    }, [saveAnimal]);

    //Function to Save animal factCard info to saveAnimal variable
    const handleSaveAnimal = () => {
        console.log(cardFact)

        const insertAt = 0; // Add new saved animal obj to start of saveAnimal array
        const nextSavedAnimal = [
            ...saveAnimal.slice(0, insertAt), // Items before the insertion point
            cardFact,// New item
            ...saveAnimal.slice(insertAt) // Items after the insertion point
          ];
          setSaveAnimal(nextSavedAnimal) //updates saveAnimal array with new animal obj that the user just click 'save to favs' on
    };

      /*
        cardFact ={
            "ID": 6,
            "dogName": "Akita",
            "dogImg": "https://cdn2.thedogapi.com/images/S1_8kx5Nm_1280.jpg",
            "dogBreedGroup": "Working",
            "dogBredFor": "Hunting bears",
            "dogLifeSpan": "10 - 14 years",
            "dogTemperament": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous"
        }
        */


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
                        ID: dog.id || 'No information available',
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
        //                 ID: cat.id || 'No information available',
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
                <h2 className='p-3 m-3 pt-5 text-center'>Select an animal and a breed to learn more about them!</h2>
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
                    </fieldset>
                </Form>

                {/*If user selects Cat then the Cat breed info is rendered onto the FactCard*/}
{/**************************ADD CAT STUFF*/}
                {cardShown === true && animalChoice === 'Cat' ? ( 
                <FactCard 
                    key={cardFact.ID}
                    animalBreed={cardFact.catName}
                    img={cardFact.catImg}
                    title1='....'
                    info1={cardFact.catBreedGroup}
                    title2='....'
                    info2={cardFact.catBredFor}
                    title3='....'
                    info3={cardFact.catLifeSpan}
                    title4='....'
                    info4={cardFact.catTemperament}
                    // handleShowInfoClick={handleShowInfoClick}
                    // handleSaveAnimal={handleSaveAnimal}
                    msg={<Card.Text className="fact-card-text"><span className='fw-bold'>Have you found your fur-ever friend?</span> <br /> If so, why not get some help to chose the paw-fect name for them.</Card.Text>}
                    btn1={<Button className='btn side-btn m-2' onClick={handleShowInfoClick}>See more images</Button>}
                    btn2={
                        <NavLink to="/GenerateName" role="button" className='btn btn-brown m-2' variant="primary">
                            Pick a name for your pet
                        </NavLink>}
                    btn3={<Button className='btn side-btn m-2' onClick={handleSaveAnimal}>Save to favourites</Button>}
                />) : null}

                {/*If user selects Dog then the Dog breed info is rendered onto the FactCard*/}
                {cardShown === true && animalChoice === 'Dog' ? (
                <FactCard 
                    key={cardFact.ID}
                    animalBreed={cardFact.dogName}
                    img={cardFact.dogImg}
                    title1='Breed group'
                    info1={cardFact.dogBreedGroup}
                    title2='Bred for'
                    info2={cardFact.dogBredFor}
                    title3='Life span'
                    info3={cardFact.dogLifeSpan}
                    title4='Temperament'
                    info4={cardFact.dogTemperament}
                    // handleShowInfoClick={handleShowInfoClick}
                    // handleSaveAnimal={handleSaveAnimal}
                    msg={<Card.Text className="fact-card-text"><span className='fw-bold'>Have you found your fur-ever friend?</span> <br /> If so, why not get some help to chose the paw-fect name for them.</Card.Text>}
                    btn1={<Button className='btn side-btn m-2' onClick={handleShowInfoClick}>See more images</Button>}
                    btn2={
                        <NavLink to="/GenerateName" role="button" className='btn btn-brown m-2' variant="primary">
                            Pick a name for your pet
                        </NavLink>}
                    btn3={<Button className='btn side-btn m-2' onClick={handleSaveAnimal}>Save to favourites</Button>}
                />) : null} 
            </div>
        </div>
    )
};

export default Info;