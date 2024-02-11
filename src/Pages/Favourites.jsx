/*********** TO DO ************/

// How to render local storage to factCard and name box
// Create function for delete btn
// Add a Toast to notify when item is deleted?? or a 'Are you sure' confirmation?


// Imported Component
import FactCard from '../Components/FactCard';

// Imported React-Bootstrap elements
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Imported CSS
import { useState, useEffect } from 'react'; 
import './pages.css'
import '../Components/Components.css'

function Favourites(props) {


        const storedAnimals = JSON.parse(localStorage.getItem('animal'))
        console.log(`This is stored animals`, storedAnimals)

        const storedNames = JSON.parse(localStorage.getItem('name'))
        console.log(`This is stored names`, storedNames)


      

    const handleDeleteAnimal = () => {

    };

    const handleDeleteName = () => {

    };

    return (
        <div className="container text-center">
            <div className="row justify-content-evenly">
                <div className="col-9">
                    <h2 className='py-3'>Breeds</h2>

                    {/*Add a map here to add all cards in?*/}

                    {storedAnimals.map((animal) => {
                        return(
                            <FactCard 
                                key={animal.dogID}
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
                    })}

                </div>
                <div className="col-3">
                    <h2 className='py-3'>Names</h2>

                    {/*Add a map here to add all names in?*/}
                    {storedNames.map((name) =>{
                        return (
                            <div className='row p-0 m-3'>
                                <Card className='col-10 namecard py-2 fav-animal-name' key={name}> {/*style={{ backgroundColor: setBackgroundColor() }}*/}
                                    <Card.Body>
                                        <Card.Text className='text-center'>
                                            {name}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Button className="btn-brown col-2 name-delete-btn" onClick={handleDeleteName}>X</Button>
                            </div>
                        )
                    })}

                    {/* <div className='row p-0 m-3'>
                        <Card className='col-10 namecard py-2'> 
                            <Card.Body>
                                <Card.Text className='text-center'>
                                    Animal Name here{props.generatedName}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button className="btn-brown col-2" onClick={handleDeleteName}>X</Button>
                    </div> */}

                </div>
            </div>
        </div>
    );
}

export default Favourites
