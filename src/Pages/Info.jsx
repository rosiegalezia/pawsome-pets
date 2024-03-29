
//Imported Components from React-Bootstrap 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';

//Imported Component 
import FactCard from '../Components/FactCard';

//Imported Other
import dogBreeds from '../assets/dogBreeds.json';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../Components/Components.css'
import catNames from '../assets/catNames.json';

function Info() {
    const [cardShown, setCardShown] = useState(false);
    const [animalChoice, setAnimalChoice] = useState('');

    // when cat is selected, then the cat breed drop down is shown + buttons
    // when dog is selected, then the dog breed drop down is shown + buttons

    // updates animalChoice to cat or dog so that it can be used to show relevant breed dropdown
    const handleAnimalChange = (event) => {
        let animalChosen = event.target.value;
        setCardShown(false);
        setAnimalChoice(animalChosen);
    }

    // get a random breed object from the json
    const generateRandom = () => {
        let randomBreed;
        setCardShown(false)
        if (animalChoice === 'Cat') {
            randomBreed = catNames[Math.floor(Math.random() * catNames.length)].id
            setBreedID(randomBreed);
            setCardShown(true)
        } else if (animalChoice === 'Dog') {
            randomBreed = dogBreeds[Math.floor(Math.random() * dogBreeds.length)].id
            randomBreed = randomBreed.split('-')[1]; //get the number from the id key in the json file so we can pass just the number for the API key
            setBreedID(randomBreed);
            setCardShown(true)
        }
    };

    //variable used in the dog API URL
    const [breedID, setBreedID] = useState('');

    // Function to take users breed selection and obtain the API breed ID number to use in API URL call
    const handleBreedChange = (event) => {
        setCardShown(false)
        event.preventDefault();
        let selectedBreed = event.target.value;

        // declare breedObj and apiBreedID variables
        let breedObj;
        let apiBreedID;

        if (animalChoice === 'Cat') {
            breedObj = catNames.find((name) => name.name == selectedBreed)
            apiBreedID = breedObj.id
            setBreedID(apiBreedID);
        } else if (animalChoice === 'Dog') {
            breedObj = dogBreeds.find((breed) => breed.breed == selectedBreed)
            apiBreedID = breedObj.id.split('-')[1]; //get the number from the id key in the json file so we can pass just the number for the API key
            setBreedID(apiBreedID);
        } 

    };

    /************************************* Scroll to Top Func *************************************/

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    /************************************* Local Storage *************************************/

    const storedAnimals = JSON.parse(localStorage.getItem('animal')) || []; // Sets storedAnimals to anything saved in local storage, but if that is empty, it will initialise as an empty array.
    const [saveAnimal, setSaveAnimal] = useState(storedAnimals);

    // Tracks when saveAnimal variable is updated and then updates local storage
    useEffect(() => {
        const uniqueAnimals = Array.from(new Map(saveAnimal.map(animal => [animal.ID, animal])).values());
        localStorage.setItem("animal", JSON.stringify(uniqueAnimals))
    }, [saveAnimal]);

    //Function to Save animal factCard info to saveAnimal variable
    const handleSaveAnimal = () => {
        const insertAt = 0; // Add new saved animal obj to start of saveAnimal array
        const nextSavedAnimal = [
            ...saveAnimal.slice(0, insertAt), // Items before the insertion point
            cardFact,// New item
            ...saveAnimal.slice(insertAt) // Items after the insertion point
        ];
        setSaveAnimal(nextSavedAnimal) //updates saveAnimal array with new animal obj that the user just click 'save to favs' on
        toggleToast();
    };

    /************************************* Toast *************************************/

    // create states for the toast that confirms name has been saved
    const [toast, setToast] = useState(false);

    // function to toggle the Toast state
    const toggleToast = () => {
        setToast(!toast)
    };

    /************************************* Cat & Dog Facts API *************************************/

    const [cardFact, setCardFact] = useState('');

    const apiKeyDog = "live_YfWC06FaSScnxQmCVmhGtpZkjdXWNT1MWyQyFQNwXWvkZI3Z9KVttI08TsgFY5a7";
    let queryURLDogFacts = "https://api.thedogapi.com/v1/images/search?breed_ids=" + breedID + "&api_key=" + apiKeyDog;

    const apiKeyCat = "live_1DOpjKMfcP15eQ7PbRy6uDlF7mgQXz2YHwjHBuJi2fpKtSrXPcjAgYxTk0kTt4tw";
    let queryURLCatFacts = "https://api.thecatapi.com/v1/images/search?breed_ids=" + breedID + "&api_key=" + apiKeyCat;

    useEffect(() => {
        if (breedID) {
            if (animalChoice === 'Dog') {
                fetch(queryURLDogFacts)
                    .then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        let dog = data[0].breeds[0];

                        let dogAPIData = {
                            ID: dog.id || 'No information available',
                            name: dog.name || 'No information available',
                            img: data[0].url || 'No information available',
                            title1:'Breed group',
                            info1: dog.breed_group || 'No information available',
                            title2:'Bred for',
                            info2: dog.bred_for || 'No information available',
                            title3:'Life span',
                            info3: dog.life_span || 'No information available',
                            title4:'Temperament',
                            info4: dog.temperament || 'No information available'
                        };
                        setCardFact(dogAPIData);
                    });
            } else if (animalChoice === 'Cat') {
                fetch(queryURLCatFacts)
                    .then(function (response) {
                        return response.json();
                    }).then(function (dataCat) {
                        let cat = dataCat[0].breeds[0];

                        let catAPIData = {
                            ID: cat.id || 'No information available',
                            name: cat.name || 'No information available',
                            img: dataCat[0].url || 'No information available',
                            title1:'Origin',
                            info1: cat.origin || 'No information available',
                            title2:'Temperament',
                            info2: cat.temperament || 'No information available',
                            title3:'Life span',
                            info3: cat.life_span || 'No information available',
                            title4:'Description',
                            info4: cat.description || 'No information available'
                        };
                        setCardFact(catAPIData);
                    });
            }
        }
    }, [breedID])
    
    /******************************************************************************************/

    return (
        <div className='page-container'>
            <div className='page-content'>
                <h2 className='p-3 m-3 pt-5 text-center'>Select an animal and a breed to learn more about them!</h2>
                <Form className='m-3'>
                    <fieldset >

                        {/* This input drop down is to choose cat or dog */}
                        <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column col-10 col-sm-10 col-lg-6">
                            <Form.Select id="animalInput" onChange={handleAnimalChange}>
                                <option>Please select an animal</option>
                                <option>Cat</option>
                                <option>Dog</option>
                            </Form.Select>
                        </Form.Group>

                        {/*If user selects Cat then the Cat breed drop down is rendered along with btns*/}
                        {animalChoice === 'Cat' ? (<>
                            <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column col-10 col-sm-10 col-lg-6">
                                <Form.Select onChange={handleBreedChange} id="BreedInput">
                                    <option id="breed-select">Please select a breed</option>
                                    {catNames.map((name) => {
                                        return <option id={name.id} key={name.id}>{name.name}</option>
                                    })};
                                </Form.Select>
                            </Form.Group>
                            <div className="m-4 mx-auto d-flex justify-content-center">
                                <Button className='btn-brown' variant="primary" type="submit" onClick={(event) => {
                                    event.preventDefault()
                                    setCardShown(true)
                                }}>Show info</Button>
                                <Button className='btn-brown ms-2 btn-primary' variant="primary" type="random-breed" onClick={(event) => {
                                    event.preventDefault()
                                    generateRandom()}}>Pick a random breed</Button>
                            </div>
                        </>) : null}

                        {/*If user selects Dog then the Dog breed drop down is rendered along with btns*/}
                        {animalChoice === 'Dog' ? (<>
                            <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column col-10 col-sm-10 col-lg-6">
                                <Form.Select onChange={handleBreedChange} id="disabledSelect">
                                    <option id="breed-select">Please select a breed</option>
                                    {dogBreeds.map((breed) => {
                                        return <option id={breed.id} key={breed.id}>{breed.breed}</option>
                                    })};
                                </Form.Select>
                            </Form.Group>
                            <div className="m-4 mx-auto d-flex justify-content-center">
                                <Button className='btn-brown' variant="primary" type="submit" onClick={(event) => {
                                    event.preventDefault()
                                    setCardShown(true)
                                }}>Show info</Button>
                                <Button className='btn-brown ms-2 btn-primary' variant="primary" type="random-breed" onClick={(event) => {
                                    event.preventDefault()
                                    generateRandom()}}>Pick a random breed</Button>
                            </div>
                        </>) : null}
                    </fieldset>
                </Form>

                {/*If user selects Cat then the Cat breed info is rendered onto the FactCard*/}
                {cardShown === true && animalChoice === 'Cat' ? (
                    <FactCard
                        key={cardFact.ID}
                        animalBreed={cardFact.name}
                        img={cardFact.img}
                        title1={cardFact.title1}
                        info1={cardFact.info1}
                        title2={cardFact.title2}
                        info2={cardFact.info2}
                        title3={cardFact.title3}
                        info3={cardFact.info3}
                        title4={cardFact.title4}
                        info4={cardFact.info4}
                        msg={<Card.Text className="fact-card-text"><span className='fw-bold'>Have you found your fur-ever friend?</span> <br /> If so, why not get some help to chose the paw-fect name for them.</Card.Text>}
                        btn2={
                            <NavLink onClick={scrollToTop} to="/GenerateName" role="button" className='btn btn-brown m-1' variant="primary">
                                Pick a name for your pet
                            </NavLink>}
                        btn3={<Button className='btn side-btn m-2' onClick={handleSaveAnimal}>Save to favourites</Button>}
                    />) : null}

                {/*If user selects Dog then the Dog breed info is rendered onto the FactCard*/}
                {cardShown === true && animalChoice === 'Dog' ? (
                    <FactCard
                        key={cardFact.ID}
                        animalBreed={cardFact.name}
                        img={cardFact.img}
                        title1={cardFact.title1}
                        info1={cardFact.info1}
                        title2={cardFact.title2}
                        info2={cardFact.info2}
                        title3={cardFact.title3}
                        info3={cardFact.info3}
                        title4={cardFact.title4}
                        info4={cardFact.info4}
                        msg={<Card.Text className="fact-card-text"><span className='fw-bold'>Have you found your fur-ever friend?</span> <br /> If so, why not get some help to chose the paw-fect name for them.</Card.Text>}
                        btn2={
                            <NavLink onClick={scrollToTop} to="/GenerateName" role="button" className='btn btn-brown m-1' variant="primary">
                                Pick a name for your pet
                            </NavLink>}
                        btn3={<Button className='btn side-btn m-2' onClick={handleSaveAnimal}>Save to favourites</Button>}
                    />) : null}

                {/* Toast to confirm animal has been saved */}
                <Toast className='toast mx-auto w-md-50 text-center' show={toast} onClose={toggleToast} delay={2000} autohide>
                    <Toast.Body>Animal has been saved to Favourites</Toast.Body>
                </Toast>
            </div>
        </div>
    )
};

export default Info;
