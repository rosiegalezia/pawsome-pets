//Imported Components from React Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function FactCard(props){
    return (
        <Card style={{ width: '18rem' }} className='m-2'>
          <Card.Img variant="top" src="https://cdn2.thedogapi.com/images/B12BnxcVQ_1280.jpg" /> {/*Currently a placeholder dog img */}
          <Card.Body>
            <Card.Title>Dog Breed</Card.Title>
            <ListGroup className='mb-2'variant="flush">
                <ListGroup.Item><span className='fw-bold'>Info 1: </span>xscvbfghjbmn</ListGroup.Item>
                <ListGroup.Item><span className='fw-bold'>Info 2: </span>xscvbfghjbmn</ListGroup.Item>
                <ListGroup.Item><span className='fw-bold'>Info 3: </span>xscvbfghjbmn</ListGroup.Item>
            </ListGroup>
            <Button className='mb-2' variant="primary">Add to favourites</Button>
            <Button variant="primary">Pick a name for your pet</Button>
          </Card.Body>
        </Card>
      );
};

export default FactCard;