import dogNames from 'dog-names';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

import './pages.css'
import '../Components/Components.css'

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

    const setBackgroundColor = () => {
        switch (Sex) {
            case 'Female':
                return '#fff0f9'; // Light pink for female
            case 'Male':
                return '#f0f9ff'; // Light blue for male
            case "Don't mind":
                return '#fffbf0'; // Yellow for don't mind
            default:
                return '#fff'; // Default white background
        }
    };

    const [toast, setToast] = useState(true);

    const toggleToast = () => {
        navigator.clipboard.writeText(generatedName)
            .then(() => {
                setToast(!toast)
            })
    };

    return (
        <div className='page-container'>
            <div className='page-content generate-name d-flex flex-column'>

                <h2 className='p-3 m-3  pt-5 text-center'>What gender name would you like for your pet?</h2>

                <Form.Select aria-label="Default select example" size="sm" onChange={handleSexChange} className='p-3 m-3 w-50 w-sm-100'>
                    <option>Select your pet's sex</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Don't mind">Don't mind</option>
                </Form.Select>

                <div className='p-0 m-3 w-50'>
                    <Card onClick={toggleToast} className='namecard py-5' style={{ backgroundColor: setBackgroundColor() }}>
                        <Card.Body>
                            <Card.Text className='text-center'>
                                <h2>{generatedName}</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='p-3 m-3 row w-md-50'>
                    <div className='col-md'>
                        <Button
                            // variant="primary"
                            className='btn-brown m-2 w-100'
                            onClick={regenerateClick}
                        >Re-generate</Button>
                    </div>

                    <div className='col-md'>
                        <Button
                            // variant="primary"
                            className='btn-brown m-2 w-100 text-nowrap'
                            onClick={regenerateClick}
                            disabled="true"
                        >Save to Favourites</Button>
                    </div>

                </div>

                <Toast className='toast w-md-50 text-center' show={toast} onClose={toggleToast} delay={1000} autohide>
                    <Toast.Body>Name copied to clipboard</Toast.Body>
                </Toast>

            </div>
        </div>


    )
}

export default GenerateName