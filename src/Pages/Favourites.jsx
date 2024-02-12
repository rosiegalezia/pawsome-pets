/*********** TO DO ************/

// How to render local storage to factCard and name box
// Create function for delete btn
// Add a Toast to notify when item is deleted?? or a 'Are you sure' confirmation?
// Why is footer in wrong place? It's too high

// Imported Component
import FactCard from '../Components/FactCard';

// Imported React-Bootstrap elements
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Imported CSS
import './pages.css'
import '../Components/Components.css'

//Imported Other
import { useState, useEffect } from 'react'; 
import { NavLink } from "react-router-dom";

function Favourites(props) {

    // Get items from Local Storage
    const storedAnimals = JSON.parse(localStorage.getItem('animal')) || []
    const storedNames = JSON.parse(localStorage.getItem('name')) || []
    // console.log('storedNames[0]: ' , storedNames[0])

    // Functions to delete a favourite item
    const handleDeleteAnimal = () => {
        localStorage.removeItem()
    };

    const handleDeleteName = () => {

    };

    return (
        <div className="page-container container text-center">
            <div className="row justify-content-evenly page-content">
                <div className="col-lg-8 col-sm-12">
                    <h2 className='py-3'>Breeds</h2>

{/******************* How to chose either cat or dog?? *******************/}
                    {!storedAnimals.includes(storedAnimals[0]) ? ( 
                        <div className='p-0 m-3' key={'no-saved-animals'}>
                            <Card className='bg-cream m-2 text-center mx-auto d-flex justify-content-center col-10 col-lg-3'>
                                <Card.Body>
                                    <Card.Text className='text-center'>
                                        No animals have been added to favourites yet!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <NavLink to="/Info" role="button" className='btn btn-brown m-2' variant="primary">
                                Find your fur-ever friend
                            </NavLink>
                        </div>
                        ) : (
                            storedAnimals.map((animal) => {
                                return(
                                    <FactCard 
                                        key={animal.ID}
                                        animalBreed={animal.dogName}
                                        img={animal.dogImg}
                                        title1='Breed group'
                                        info1={animal.dogBreedGroup}
                                        title2='Bred for'
                                        info2={animal.dogBredFor}
                                        title3='Life span'
                                        info3={animal.dogLifeSpan}
                                        title4='Temperament'
                                        info4={animal.dogTemperament}
                                        btn2={<Button className='btn btn-brown m-2' variant="primary" onClick={handleDeleteAnimal}>Delete</Button>}
                                    />)
                            })
                        )}


                </div>
                <div className="col-lg-4 col-sm-12">
                    <h2 className='py-3'>Names</h2>

                    {!storedNames.includes(storedNames[0]) ? (
                        <div className='p-0 m-3 ' key={'no-saved-names'}>
                            <Card className='bg-cream m-2 text-center mx-auto d-flex justify-content-center col-10 col-lg-7'>
                                <Card.Body>
                                    <Card.Text className='text-center'>
                                        No names have been added to favourites yet!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <NavLink to="/GenerateName" role="button" className='btn btn-brown m-2' variant="primary">
                                Pick a name for your pet
                            </NavLink>
                        </div>
                    ) : (
                        storedNames.map((name) =>{
                            return (
                                <div className='row p-0 m-3'>
                                    <Card className='col-10 namecard py-1 fav-animal-name' key={name}> {/*style={{ backgroundColor: setBackgroundColor() }}*/}
                                        <Card.Body>
                                            <Card.Text className='text-center'>
                                                {name}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Button className="btn-brown col-2 name-delete-btn" onClick={handleDeleteName}>X</Button>
                                </div>
                            )
                        })
                    )}

                </div>
            </div>
        </div>
    );
}

export default Favourites
