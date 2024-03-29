
// Imported Component
import FactCard from '../Components/FactCard';

// Imported React-Bootstrap elements
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Imported CSS
import './pages.css'
import '../Components/Components.css'

//Imported Other
import { useState } from 'react'; 
import { NavLink } from "react-router-dom";

function Favourites(props) {

    const storedAnimals = JSON.parse(localStorage.getItem('animal')) || []; // Sets storedAnimals to anything saved in local storage, but if that is empty, it will initialise as an empty array.
    const[saveAnimal, setSaveAnimal] = useState(storedAnimals);

    const storedNames = JSON.parse(localStorage.getItem('name')) || []; // Sets storedAnimals to anything saved in local storage, but if that is empty, it will initialise as an empty array.
    const[saveName, setSaveName] = useState(storedNames);

    // Functions to delete an item on favourites page
    const handleDeleteAnimal = (animalID) => {
        let newStoredAnimals = storedAnimals.filter((animal) => {
           return animal.ID !== animalID //returns everything in storedAnimals that doesn't match the id of the animal that was seleted for delete - therefore new array is everything except deleted animal 
        })
        setSaveAnimal(newStoredAnimals)
        localStorage.setItem('animal', JSON.stringify(newStoredAnimals))
    };

    const handleDeleteName = (deletedName) => {
        let newStoredNames = storedNames.filter((name) => {
            return name !== deletedName //returns everything in storedNames that doesn't match the id of the name that was seleted for delete - therefore new array is everything except deleted name 
         })
         setSaveName(newStoredNames)
        localStorage.setItem('name', JSON.stringify(newStoredNames))
    };

    /************************************* Scroll to Top Func *************************************/

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    

    return (
        <div className="page-container container text-center">
            <div className="row justify-content-evenly page-content">
                <div className="col-12 col-lg-5 col-sm-12 mx-3">
                    <h2 className='p-3 m-3 pt-5 '>Breeds</h2>
                    {/* display empty card until favourites are saved */}
                    {!storedAnimals.includes(storedAnimals[0]) ? ( 
                        <div className='p-0 m-3 justify-content-center' key={'no-saved-animals'}>
                            <Card className='w-100 m-3 bg-cream text-center mx-auto d-flex justify-content-center'>
                                <Card.Body>
                                    <Card.Text className='text-center'>
                                        No animals have been added to favourites yet!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            {/* link back to info page */}
                            <NavLink onClick={scrollToTop} to="/Info" role="button" className='w-100 btn btn-brown' variant="primary">
                                Find your fur-ever friend
                            </NavLink>
                        </div>
                        ) : (
                            storedAnimals.map((animal) => {
                                return(
                                    // show fact card for each saved animal
                                    <FactCard 
                                        key={animal.ID}
                                        animalBreed={animal.name}
                                        img={animal.img}
                                        title1={animal.title1}
                                        info1={animal.info1}
                                        title2={animal.title2}
                                        info2={animal.info2}
                                        title3={animal.title3}
                                        info3={animal.info3}
                                        title4={animal.title4}
                                        info4={animal.info4}
                                        // delete from favourites
                                        btn2={<Button className='btn btn-brown m-2' variant="primary" onClick={() => handleDeleteAnimal (animal.ID)}>Delete</Button>}
                                    />)
                            })
                        )}
                </div>
                <div className="col-12 col-lg-5 col-sm-12 mx-3" key={'no-saved-animals'}>
                    <h2 className='p-3 m-3 pt-5 '>Names</h2>
                    {/* display empty card until favourites are saved */}
                    {!storedNames.includes(storedNames[0]) ? (
                        <div className='p-0 m-3 ' key={'no-saved-names'}>
                             <Card className='w-100 m-3 bg-cream text-center mx-auto d-flex justify-content-center'>
                                <Card.Body>
                                    <Card.Text className='text-center'>
                                        No names have been added to favourites yet!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            {/* link back to name generator */}
                            <NavLink onClick={scrollToTop} to="/GenerateName" role="button" className='w-100 btn btn-brown' variant="primary">
                                Pick a name for your pet
                            </NavLink>
                        </div>
                    ) : (
                        storedNames.map((name) =>{
                            return (
                                <div className='row p-0 m-3' key={name}>
                                    <Card className='col-10 namecard py-1 fav-animal-name' id={name} key={name}>
                                        {/* card to display saved name(s) */}
                                        <Card.Body>
                                            <Card.Text className='text-center'>
                                                {name}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    {/* delete from favourites */}
                                    <Button className="btn-brown col-2 name-delete-btn" onClick={() => handleDeleteName(name)}>X</Button>
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
