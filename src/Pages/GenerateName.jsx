import dogNames from 'dog-names';
const femaleNames = dogNames.femaleRandom();
const maleNames = dogNames.maleRandom();

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GenerateName() {
    return (
        <div>
        <Card style={{ width: '18rem', backgroundColor: 'pink'}}>
            <Card.Body>
                <Card.Title>{femaleNames}</Card.Title>
                <Card.Text>
                An example female pet name
                </Card.Text>
                <Button variant="primary">Re-generate</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default GenerateName