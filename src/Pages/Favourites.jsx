/*********** TO DO ************/

// Create function for favs btn
// Add ways to delete items
// Add a Toast to notify when item is deleted?? or a 'Are you sure' confirmation?


// Imported Component
import FactCard from '../Components/FactCard';

// Imported React-Bootstrap elements
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Imported CSS
import './pages.css'
import '../Components/Components.css'

function Favourites(props) {

    const handleDeleteAnimal = () => {

    };

    return (
        <div className="container text-center">
            <div className="row justify-content-evenly">
                <div className="bg-secondary col-9">
                    <h2 className='py-3'>Breeds</h2>
                    {/*Add a map here to add all cards in?*/}
                    <FactCard 
                        key={1}
                        animalBreed={'Animal Breed'}
                        img={'https://wiki.dave.eu/images/4/47/Placeholder.png'}
                        title1='title1'
                        info1={'bit on info 1'}
                        title2='title2'
                        info2={'bit on info 2'}
                        title3='title3'
                        info3={'bit on info 3'}
                        title4='title4'
                        info4={'bit on info 4'}
                        btn2={<Button className='btn btn-brown m-2' variant="primary" onClick={handleDeleteAnimal}>Delete</Button>}
                    />
                    {/* <FactCard 
                        key={cardFact.dogID}
                        animalBreed={cardFact.dogName}
                        img={cardFact.dogImg}
                        title1='....'
                        info1={cardFact.dogBreedGroup}
                        title2='....'
                        info2={cardFact.dogBredFor}
                        title3='...'
                        info3={cardFact.dogLifeSpan}
                        title4='...'
                        info4={cardFact.dogTemperament}
                        btn2={<Button className='btn btn-brown m-2' variant="primary" onClick={handleDeleteAnimal}>Delete</Button>}
                    /> */}
                </div>
                <div className="bg-primary col-3">
                    <h2 className='py-3'>Names</h2>
                    <div className='p-0 m-3'>
                        <Card className='namecard py-2'> {/*style={{ backgroundColor: setBackgroundColor() }}*/}
                            <Card.Body>
                                <Card.Text className='text-center'>
                                    {/*Add a map here to add all names in?*/}
                                    <h4>Animal Name here{props.generatedName}</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favourites
