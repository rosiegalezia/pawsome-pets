import dogNames from 'dog-names';
import { useState } from 'react';
const femaleNames = dogNames.femaleRandom();
const maleNames = dogNames.maleRandom();
const allNames = dogNames.allRandom()

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function GenerateName() {

    const [Sex, setSex] = useState('')

    let names;

    if (Sex === "Female"){names = femaleNames} else
    if (Sex === "Male"){names = maleNames} else 
    {names = allNames}

    console.log(names)

    const handleSexChange = (event) => {
        console.log(event.target.value)
        setSex(event.target.value) 
        }

    return (
        <div>
            <Form.Select aria-label="Default select example" style={{padding: '0.5rem', margin: '1rem'}} onChange={handleSexChange}>

                <option>Select your pet's sex</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Don't mind">Don't mind</option>

            </Form.Select>

            <div>
                <Card style={{ width: '18rem', backgroundColor: 'pink', padding: '2rem'}}>
                    <Card.Body>
                        <Card.Text style={{}}>
                        {names}
                        </Card.Text>
                        {/* <Button variant="primary">Re-generate</Button> */}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default GenerateName