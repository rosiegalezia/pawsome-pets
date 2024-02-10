import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DropDown(props){
    return (
        <>
            <Form.Group className="mb-3 mx-auto d-flex justify-content-center flex-column" style={{ width: "50%" }}>
                <Form.Select onChange={props.handleBreedChange} id="disabledSelect">
                    <option id="breed-select">Please select a breed</option>
                    {/* Add here an if/else statement if user choose cat or dog */}
                    {props.animalBreeds}
                    {/* {dogBreeds.map((breed) => {
                                    return <option id={breed.id}>{breed.breed}</option>
                                })}; */}
                </Form.Select>
            </Form.Group>

            <div className="m-4 mx-auto d-flex justify-content-center">
                <Button className='btn-brown' variant="primary" type="submit" onClick={props.handleShowInfoClick}>Show info</Button>
                <Button className='btn-brown ms-2 btn-primary' variant="primary" type="random-breed">Pick a random breed</Button>
            </div>
        </>
    )
};

export default DropDown;