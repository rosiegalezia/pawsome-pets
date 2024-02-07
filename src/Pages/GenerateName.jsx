import dogNames from 'dog-names';
import { useState } from 'react';
// const femaleNames = dogNames.femaleRandom();
// const maleNames = dogNames.maleRandom();
// const allNames = dogNames.allRandom()

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function GenerateName() {

    const [Sex, setSex] = useState('')
    const [generatedName, setGeneratedName] = useState('')

    // let names;

    const handleSexChange = (event) => {
        console.log(event.target.value)
        setSex(event.target.value)
        generateName()
    }

    const generateName = () => {
        if (Sex === "Female") { setGeneratedName(dogNames.femaleRandom()) }
        else if (Sex === "Male") { setGeneratedName(dogNames.maleRandom()) }
        else { setGeneratedName(dogNames.allRandom()) }
    }

    const regenerateClick = () => {
        generateName();
    };

    return (
        <div>
            <h2 className='p-3 m-3 w-50'>What gender name would you like for your pet?</h2>
            <Form.Select aria-label="Default select example" size="sm" onChange={handleSexChange} className='p-3 m-3 w-50'>

                <option>Select your pet's sex</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Don't mind">Don't mind</option>

            </Form.Select>

            <div>
                <Card className='p-3 m-3 w-50'>
                    <Card.Body>
                        <Card.Text style={{}}>
                            {generatedName}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Button
                    variant="dark"
                    className='p-3 m-3 w-50'
                    onClick={regenerateClick}
                >Re-generate</Button>
            </div>

        </div>
    )
}

export default GenerateName