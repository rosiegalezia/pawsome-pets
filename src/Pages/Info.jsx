//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Imported Component 
import FactCard from '../Components/FactCard';

import dogBreeds from '../assets/dogBreeds.json';

import '../Components/Components.css'


function Info() {
    return (
        <div className='page-container'>
            <div className='page-content'>
                <h2 className='p-3 m-3 pt-5 text-center'>Select a dog breed to learn more about them!</h2>

                <Form className='m-3'>
                    <fieldset >
                        {/* <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Select your animal</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Select your animal</option>
                                <option>Cat</option>
                                <option>Dog</option>
                            </Form.Select>
                        </Form.Group> */}
                        <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column" style={{ width: "50%" }}>
                            <Form.Select id="disabledSelect">
                                <option id="breed-select">Please select a breed</option>
                                {dogBreeds.map((breed) => {
                                    return <option id={breed.id}>{breed.breed}</option>
                                })};
                            </Form.Select>
                        </Form.Group>
                        <div className="mb-3 mx-auto d-flex justify-content-center">
                            <Button className='btn-brown m-2' variant="primary" type="submit">Show Info</Button>
                            <Button className='btn-brown m-2' variant="primary" type="random-breed">Pick a random breed</Button>
                        </div>
                    </fieldset>
                </Form>

                <FactCard />
            </div>

        </div>
    )
}

export default Info;