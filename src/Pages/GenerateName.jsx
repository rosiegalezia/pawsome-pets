import dogNames from 'dog-names';
import { useState } from 'react';
// const femaleNames = dogNames.femaleRandom();
// const maleNames = dogNames.maleRandom();
// const allNames = dogNames.allRandom()

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import './pages.css'

function GenerateName() {

    const [Sex, setSex] = useState('')
    const [generatedName, setGeneratedName] = useState('')

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
        <div className='generate-name d-flex flex-column'>

            <h2 className='p-3 m-3 text-center'>What gender name would you like for your pet?</h2>

            <Form.Select aria-label="Default select example" size="sm" onChange={handleSexChange} className='p-3 m-3 w-50'>
                <option>Select your pet's sex</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Don't mind">Don't mind</option>
            </Form.Select>

            <div className='p-0 m-3 w-50'>
                <Card className='namecard py-5'>
                    <Card.Body>
                        <Card.Text className='text-center'>
                           <h2>{generatedName}</h2> 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='p-3 m-3 d-flex'>
                <Button
                    variant="dark"
                    className=''
                    onClick={regenerateClick}
                >Re-generate</Button>
            </div>

        </div>
    )
}

export default GenerateName