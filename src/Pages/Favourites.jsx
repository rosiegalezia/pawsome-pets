// Imported Component
import FactCard from '../Components/FactCard';

// Imported React-Bootstrap elements
import Card from 'react-bootstrap/Card';

// Imported CSS
import './pages.css'
import '../Components/Components.css'

function Favourites(props) {

    return (
        <div className="container text-center">
            <div className="row justify-content-evenly">
                <div className="bg-secondary col-9">
                    <h2 className='py-3'>Breeds</h2>
                    {/*Add a map here to add all cards in?*/}
                    <FactCard/>
                    <FactCard/>
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
