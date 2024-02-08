/*********** TO DO ************/

// Center Card
// Remove Dog image and add seperate card to left for image https://cdn2.thedogapi.com/images/B12BnxcVQ_1280.jpg
// Center Dog Breed
// Center buttons




//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function FactCard(props) {
    return (
        <Card style={{ width: '38rem' }} bg="dark" text='light' className='m-2'>
            {/* <Card.Img variant="top" src="https://cdn2.thedogapi.com/images/B12BnxcVQ_1280.jpg" /> Currently a placeholder dog img */}
            <Card.Body>
                <Card.Title className='mb-4' >Dog Breed</Card.Title>
                
                {/* <ListGroup className='mb-3' as="ul">
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 1: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 2: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li" ><span className='fw-bold'>Info 3: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="dark" as="li"><span className='fw-bold'>Info 4: </span>xscvbfghjbmn</ListGroup.Item>
                </ListGroup> */}

                <ListGroup className='mb-3' as="ul">
                    <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Breed group: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Bred for: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="light" as="li" ><span className='fw-bold'>Life span: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item variant="light" as="li"><span className='fw-bold'>Temperament: </span>xscvbfghjbmn</ListGroup.Item>
                </ListGroup>


                {/* <ListGroup className='mb-2' variant="flush">
                    <ListGroup.Item border="dark" ><span className='fw-bold'>Info 1: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item className='text-bg-secondary p-3'><span className='fw-bold'>Info 2: </span>xscvbfghjbmn</ListGroup.Item>
                    <ListGroup.Item className='text-bg-secondary p-3'><span className='fw-bold'>Info 3: </span>xscvbfghjbmn</ListGroup.Item>
                </ListGroup> */}

                <Card.Text >
                    Have you found your fur-ever friend? <br/> If so, why not get some help to chose the paw-fect name for them.
                </Card.Text>
                <Button className='me-4' variant="primary">Pick a name for your pet</Button>
                <Button variant="primary">Add to favourites</Button>
            </Card.Body>
        </Card>
    );
};

export default FactCard;